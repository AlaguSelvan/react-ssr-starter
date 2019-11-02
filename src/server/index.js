import express from 'express'
import Loadable from 'react-loadable'
import stateRoutes from './stateRoutes'
import bodyParser from 'body-parser'
import paths from '../../config/paths'
import manifestHelpers from 'express-manifest-helpers'
import path from 'path'
import cors from 'cors'
const app = express()
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/assets', express.static(paths.assetPath))
if (process.env.NODE_ENV === 'development') {
  app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
}
// app.use('/public', expressStaticGzip(paths.publicPath, {
//   enableBrotli: true
// }))

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`,
  })
)

const PORT = process.env.PORT
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on Port: https://localhost:${PORT}`)
  })
})

stateRoutes(app)
export default app