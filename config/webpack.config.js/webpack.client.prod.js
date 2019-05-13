'use strict'
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const config = {
  mode: 'production',
  entry: {
    client: './lib/src/client.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].[id].bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
}

module.exports = config
