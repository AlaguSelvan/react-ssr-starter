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
  assetPath: resolveApp('build/assets')
}

module.exports = paths
