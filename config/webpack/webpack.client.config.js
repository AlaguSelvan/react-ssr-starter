const { resolve } = require('path')
const smart = require('webpack-merge')
const common = require('./webpack.config')
require('dotenv').config();

const config =
  process.env.NODE_ENV === 'development'
    ? require('./webpack.client.dev')
    : require('./webpack.client.prod')

const base = {
  output: {
    path: resolve('build', 'public'),
    publicPath: '/public/'
  }
}

module.exports = smart(common, base, config)
