const { resolve } = require('path')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin

module.exports = {
  entry: {
    client: './lib/src/client/client.js'
  },
  output: {
    path: resolve(__dirname, 'lib/public'),
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './lib/public/react-loadable.json'
    })
  ]
}
