import express from 'express'
import { resolve } from 'path'
import Loadable from 'react-loadable'
import stateRoutes from './src/server/stateRoutes'
import bodyParser from 'body-parser'
const app = express()
require('dotenv').config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/assets', express.static(resolve(__dirname, 'assets')))
app.use('/public', express.static(resolve(__dirname, 'public')))

// app.get('/public/*.js', function (req, res, next) {
//   req.url = req.url + '.gz'
//   res.set('Content-Encoding', 'gzip')
//   next()
// })

const PORT = process.env.PORT || 7777
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
  })
}
)

stateRoutes(app)
