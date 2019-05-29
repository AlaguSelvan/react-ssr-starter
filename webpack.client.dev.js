const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin

const config = {
  mode: 'development',
  entry: {
    client: './lib/src/client/client.js'
  },
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/public/react-loadable.json'
    })
  ],
  optimization: {
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
