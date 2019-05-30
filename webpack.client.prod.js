const { resolve } = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

const config = {
  mode: 'production',
  entry: {
    client: resolve('dist', 'src', 'client', 'client.js')
  },
  output: {
    // main file
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].[id].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 20 },
      threshold: 10240,
      minRatio: 1.6,
      deleteOriginalAssets: false
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 1.6
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$/,
        cache: true,
        parallel: 4,
        exclude: /node_modules/
      })
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      minChunks: 4,
      maxAsyncRequests: 1,
      maxInitialRequests: 1,
      automaticNameDelimiter: '.',
      name: true,
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

module.exports = config
