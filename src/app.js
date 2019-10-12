import express from 'express'
import Loadable from 'react-loadable'
import helmet from 'helmet'
// import stateRoutes from './server/stateRoutes'
import bodyParser from 'body-parser'
import paths from '../config/paths'
import routes from './client/Router/routes'
import configureStore from './client/redux/configureStore'
import MobileDetect from 'mobile-detect'
import { matchPath } from 'react-router-dom'
import ssr from './server/server'
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

app.get('*', (req, res) => {
  const store = configureStore()
  // map server-side url to front end url
  const dataRequirementsDesktop = routes
    .filter(route => matchPath(req.url, route))
    .map(route => route.serverFetch ? route.serverFetch(store) : store)
  Promise.all([dataRequirementsDesktop]).then(_ => {
    const md = new MobileDetect(req.headers['user-agent'])
    const response = ssr(req.url, store, md.mobile())
    return res.send(response)
  })
})
