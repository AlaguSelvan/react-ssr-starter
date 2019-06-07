const { resolve } = require('path')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

const common = {
  entry: {
    client: resolve('lib', 'src', 'client', 'client.js')
  },
  output: {
    path: resolve('build/public'),
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            publicPath: (resourcePath, context) => {
              return path.relative(path.dirname(resourcePath), context) + '/'
            }
          }
        ]
      }
    ],
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/'
              }
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ReactLoadablePlugin({
      // filename: resolve('build/public/react-loadable.json')
      filename: resolve('build', 'public', 'react-loadable.json')
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new Dotenv({
      path: process.env.NODE_ENV === 'production' ? '.env' : '.env',
      safe: false
    }),
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = common
