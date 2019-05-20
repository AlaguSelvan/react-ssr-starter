const { resolve } = require('path')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

const common = {
  entry: {
    client: './lib/src/client.js'
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
    }),
    new Dotenv({
      path: process.env.NODE_ENV === 'production' ? '.env' : '.env',
      safe: false
    }),
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = common
