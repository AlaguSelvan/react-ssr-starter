import express from 'express'
import Loadable from 'react-loadable'
import helmet from 'helmet'
// import stateRoutes from './server/stateRoutes'
import bodyParser from 'body-parser'
import paths from '../config/paths'
import routes from './client/Router/routes'
import configureStore from './client/redux/configureStore'
// import MobileDetect from 'mobile-detect'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import React from 'react'
import { renderToString } from 'react-dom/server'
// import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from '../build/public/react-loadable.json'
import { Provider as ReduxProvider } from 'react-redux'
// import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple'
import App from './client/pages/Desktop/App'
import template from './utils/template'
import fs from 'fs'
import openBrowser from 'react-dev-utils/openBrowser'
const { resolve } = require('path')

const app = express()
const expressStaticGzip = require('express-static-gzip')
app.use(helmet())

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/assets', express.static(paths.assetPath))
app.use('/public', expressStaticGzip(paths.publicPath, {
  enableBrotli: true
}))

let HOST = process.env.NODE_HOST || 'localhost' // Define your host from 'package.json'
const PORT = process.env.PORT
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    const url = `http://${HOST}:${PORT}`
    if (openBrowser(url)) {
      console.info("==> 🖥️  Opened on your browser's tab!")
    }
  })
})

if (process.env.NODE_ENV !== 'development') {
  app.use('/public', expressStaticGzip(paths.publicPath, {
    enableBrotli: true
  }))
  app.use('/assets', express.static(paths.assetPath))
} else {
  const webpack = require('webpack')
  const webpackConfig = require('../config/webpack/webpack.config.hot.js')
  const compiler = webpack(webpackConfig)
  compiler.apply(new webpack.ProgressPlugin())
  app.use(
    require('webpack-dev-middleware')(compiler, {
      path: resolve('build', 'public'),
      publicPath: '/public/',
      headers: { 'Access-Control-Allow-Origin': '*' },
      hot: true,
      quiet: true,
      noInfo: true,
      writeToDisk: true,
      stats: 'minimal',
      serverSideRender: true
    })
  )

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: false
    })
  )
}

const response = (url, store, mobile, branch) => {
  const context = {}
  // const sheetsRegistry = new SheetsRegistry()
  // const sheetsManager = new Map()
  const sheets = new ServerStyleSheets()

  const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
        main: '#f44336'
      }
    },
    typography: {
      useNextVariants: true
    }
  })
  // const generateClassName = createGenerateClassName()

  let modules = []

  let content = renderToString(
    sheets.collect(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <ReduxProvider store={store} >
          <StaticRouter location={url} context={context}>
            <ThemeProvider theme={theme}>
              {/* {mobile === null ? <App /> : <MobileApp />} */}
              {/* {renderRoutes(branch)} */}
              <App />
            </ThemeProvider>
          </StaticRouter>
        </ReduxProvider>
      </Loadable.Capture>
    )
  )
  let reactLoadableStats = JSON.parse(fs.readFileSync('build/public/react-loadable.json'))
  let bundles = getBundles(reactLoadableStats, modules)
  const bundleScripts = bundles
    .map(bundle => `<script src="${bundle.publicPath}"></script>`)
    .join('')
  const helmet = Helmet.renderStatic()
  const state = store.getState()
  const css = sheets.toString()

  return template(css, helmet, state, content, bundleScripts)
}

app.get('*', (req, res) => {
  const store = configureStore()
  // map server-side url to front end url
  let { url } = req
  const branch = matchRoutes(routes, req.path)
  console.log(branch, 'branch')
  const serverData = routes
    .filter(route => matchPath(url, route))
    .map(route => route.serverFetch ? route.serverFetch(store) : store)
  Promise.all([serverData]).then(_ => {
    // const md = new MobileDetect(req.headers['user-agent'])
    return res.send(response(req.url, store, branch))
  })
})
