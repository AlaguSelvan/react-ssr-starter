import express from 'express'
import path from 'path'
import Loadable from 'react-loadable'
import stateRoutes from './server/stateRoutes'

const app = express()

app.use(express.static('public'))
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

const PORT = process.env.PORT || 7777
Loadable.preloadAll().then(() => app.listen(PORT, '0.0.0.0', () => {
  console.log(`app running on port ${PORT}`)
}))
stateRoutes(app)