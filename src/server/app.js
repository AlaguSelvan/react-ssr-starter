import express from 'express'
import Loadable from 'react-loadable'
import stateRoutes from './stateRoutes'
import bodyParser from 'body-parser'
import paths from '../../config/paths'

const app = express()
const expressStaticGzip = require('express-static-gzip')

require('dotenv').config()

// HMR
// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack')
//   const webpackHotMiddleware = require('webpack-hot-middleware')
//   // const webpackDevMiddleware = require('webpack-dev-middleware')
//   const config = require('../config/webpack/webpack.client.config.js')
//   console.log(config)
//   const compiler = webpack(config)
//   app.use('/assets', express.static(paths.publicPath))
//   app.use('/public', express.static(paths.assetPath))
//   app.use(webpackHotMiddleware(compiler))
//   // app.use(
//   //   webpackDevMiddleware(compiler, {
//   //     publicPath: paths.publicPath
//   //   })
//   // )
// }
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/assets', express.static(paths.assetPath))
app.use('/public', expressStaticGzip(paths.publicPath, {
  enableBrotli: true
}))

const PORT = process.env.PORT
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on Port: https://localhost:${PORT}`)
  })
})

stateRoutes(app)
