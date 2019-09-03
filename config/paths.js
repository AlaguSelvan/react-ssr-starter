const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

// use html file for webpack dev server
const paths = {
  appHtmlt: resolveApp('config/webpack.config.js/template.html'),
  clientBuild: resolveApp('build'),
  clientEntry: resolveApp('src/client/client.js'),
  publicPath: resolveApp('build/public'),
  assetPath: resolveApp('build/assets'),
  appHtml: resolveApp('config/webpack.config.js/template.html'),
  clientBuild: resolveApp('build/client'),
  serverBuild: resolveApp('build/server'),
  dotenv: resolveApp('.env'),
  src: resolveApp('src'),
  srcClient: resolveApp('src/client'),
  srcServer: resolveApp('src/server'),
}

module.exports = paths
