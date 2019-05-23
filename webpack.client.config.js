'use strict'

const { resolve } = require('path')
const smart = require('webpack-merge')
const common = require('./webpack.config')

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')

const config =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.client.prod')
    : require('./webpack.client.dev')

const base = {
  output: {
    path: resolve('dist/public')
  }
}

module.exports = smart(common, base, config)
