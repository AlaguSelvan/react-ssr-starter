const webpack = require('webpack')
const { resolve } = require('path')
const smart = require('webpack-merge')
// const common = require('./webpack.config')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin
const Dotenv = require('dotenv-webpack')
require('dotenv').config();

const config =
  process.env.NODE_ENV === 'development'
    ? require('./webpack.client.dev')
    : require('./webpack.client.prod')

const common = {
  plugins: [
    new ReactLoadablePlugin({
      filename: resolve('build', 'public', 'react-loadable.json')
    }),
    new Dotenv({
      path: process.env.NODE_ENV === 'production' ? '.env' : '.env',
      safe: false
    }),
    new webpack.NamedModulesPlugin()
  ]
}

const base = {
  output: {
    path: resolve('build', 'public'),
    publicPath: '/public/'
  }
}

module.exports = smart(common, base, config)
