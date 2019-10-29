import express from 'express'
import Loadable from 'react-loadable'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import expressStaticGzip from 'express-static-gzip'
import routes from './client/Router/routes'
import configureStore from './client/redux/configureStore'
import { StaticRouter, matchPath } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { getBundles } from 'react-loadable/webpack'
import { Provider as ReduxProvider } from 'react-redux'
import { Helmet } from 'react-helmet'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple'
import App from './client/App'
import template from './utils/template'
import fs from 'fs'
import openBrowser from 'react-dev-utils/openBrowser'
const { resolve } = require('path')

const app = express()
app.use(helmet())

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const HOST = process.env.NODE_HOST || 'localhost'
const PORT = process.env.PORT

if (process.env.NODE_ENV !== 'development') {
  app.use('/assets', express.static(resolve('build', 'public')))
  app.use('/public', expressStaticGzip(resolve('build', 'public'), {
    enableBrotli: true
  }))
} else {
  const webpack = require('webpack')
  const webpackConfig = require('../config/webpack/webpack.config.js')
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

const renderHtml = (url, store, mobile, branch) => {
  const context = {}
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

  let modules = []

  const jsx = (
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <ReduxProvider store={store}>
        <StaticRouter location={url} context={context}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StaticRouter>
      </ReduxProvider>
    </Loadable.Capture>
  )

  const html = renderToString(sheets.collect(jsx))
  let stats = JSON.parse(fs.readFileSync('build/react-loadable.json'))
  let bundles = getBundles(stats, modules)
  const bundleScripts = bundles.map(bundle => `<script src="${bundle.publicPath}"></script>`).join('')
  const helmet = Helmet.renderStatic()
  const initialState = store.getState()
  const css = sheets.toString()

  return template(css, helmet, initialState, html, bundleScripts)
}

app.get('*', (req, res) => {
  const store = configureStore()
  let { url } = req
  const branch = matchRoutes(routes, req.path)
  const serverData = routes
    .filter(route => matchPath(url, route))
    .map(route => route.serverFetch ? route.serverFetch(store) : store)
  Promise.all([serverData]).then(_ => {
    return res.send(renderHtml(req.url, store, branch))
  })
})

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    const url = `http://${HOST}:${PORT}`
    if (openBrowser(url)) {
      console.info("==> 🖥️  Opened on your browser's tab!")
    }
  })
})
