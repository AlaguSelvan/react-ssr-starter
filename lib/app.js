import express from 'express'
import path from 'path'
import Loadable from 'react-loadable'
import stateRoutes from './server/stateRoutes'

const app = express()

app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
app.use('/public', express.static(path.resolve(__dirname, 'public')))

const PORT = process.env.PORT || 7777
Loadable.preloadAll().then(() => app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
}))

stateRoutes(app)