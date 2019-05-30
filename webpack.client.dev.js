const { resolve } = require('path')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    client: resolve('lib', 'src', 'client', 'client.js')
  },
  output: {
    filename: '[name].js',
    publicPath: '/public/'
  },
  devtool: 'inline-cheap-module-source-map',
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
    new ReactLoadablePlugin({
      filename: './dist/public/react-loadable.json'
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['dist']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1,
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
        }
      }
    }
  }
}

module.exports = config
