import express from 'express'
import Loadable from 'react-loadable'
import stateRoutes from './server/stateRoutes'
import bodyParser from 'body-parser'
import paths from '../config/paths'

const app = express()
const expressStaticGzip = require('express-static-gzip')

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
    console.log(`App is running on Port: https://localhost:${PORT}`)
  })
})

stateRoutes(app)
