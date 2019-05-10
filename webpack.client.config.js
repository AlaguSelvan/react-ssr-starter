'use strict'

const { resolve } = require('path')
const smart = require('webpack-merge')
const common = require('./webpack.config')

const config =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.client.prod')
    : require('./webpack.client.dev')

const base = {
  output: {
    path: resolve(__dirname, 'lib/public')
  }
}

module.exports = smart(common, base, config)
