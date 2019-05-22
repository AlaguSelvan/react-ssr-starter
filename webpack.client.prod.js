const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')

const config = {
  mode: 'production',
  entry: {
    client: './lib/src/client/client.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].[id].bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}

module.exports = config
