const { resolve } = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  mode: 'production',
  entry: {
    client: resolve('src', 'client', 'index.tsx'),
    vendor: ['react', 'material-ui', 'react-dom']
  },
  output: {
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // test: /\.js(\?.*)?$/i,
        test: /\.js$/,
        cache: true,
        parallel: 4,
        exclude: /node_modules/
      })
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
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
