import express from 'express'
import Loadable from 'react-loadable'
import helmet from 'helmet'
import stateRoutes from './server/stateRoutes'
import bodyParser from 'body-parser'
import paths from '../config/paths'
import routes from './client/Router/routes'
import configureStore from './client/redux/configureStore'
import MobileDetect from 'mobile-detect'
import { matchPath } from 'react-router-dom'
import ssr from './server/server'

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

const PORT = process.env.PORT
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on Port: localhost:${PORT}`)
  })
})

app.get('*', (req, res) => {
  const store = configureStore()
  const dataRequirementsDesktop = routes
    .filter(route => matchPath(req.url, route))
    .map(route => route.serverFetch ? route.serverFetch(store) : store)
  Promise.all([dataRequirementsDesktop]).then(_ => {
    const md = new MobileDetect(req.headers['user-agent'])
    const response = ssr(req.url, store, md.mobile())
    return res.send(response)
  })
})
