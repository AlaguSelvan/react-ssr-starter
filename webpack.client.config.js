'use strict'

const { resolve } = require('path')
const smart = require('webpack-merge')
const common = require('./webpack.config')

const config =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.client.prod')
    : require('./webpack.client.prod')

const base = {
  output: {
    path: resolve('dist', 'public'),
    publicPath: '/public/'
  }
}

module.exports = smart(common, base, config)
