const webpack = require('webpack');
const {resolve} = require('path');
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin

// module.exports = {
//   resolve: {
//     extensions: ['.js', '.jsx', '.json'],
//     alias: {
//       '@src': path.resolve(__dirname, '../src'),
//       '@config': path.resolve(__dirname, '../config'),
//       '@app': path.resolve(__dirname, '../src/app'),
//       '@components': path.resolve(__dirname, '../src/app/components'),
//       '@redux': path.resolve(__dirname, '../src/app/redux'),
//       '@pages': path.resolve(__dirname, '../src/app/pages'),
//       '@routes': path.resolve(__dirname, '../src/app/routes'),
//       '@util': path.resolve(__dirname, '../src/app/util'),
//       '@design': path.resolve(__dirname, '../src/app/design'),
//       '@icons': path.resolve(__dirname, '../src/app/design/Iconography'),
//       '@theme': path.resolve(__dirname, '../src/app/design/Theme'),
//     }
//   }
// };

const config =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.client.prod')
    : require('./webpack.client.dev')

const base = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@src': resolve(__dirname, '../src'),
      '@config': resolve(__dirname, '../config'),
      '@app': resolve(__dirname, '../src/app'),
      '@components': resolve(__dirname, '../src/app/components'),
      '@redux': resolve(__dirname, '../src/app/redux'),
      '@pages': resolve(__dirname, '../src/app/pages'),
      '@routes': resolve(__dirname, '../src/app/routes'),
      '@util': resolve(__dirname, '../src/app/util'),
      '@design': resolve(__dirname, '../src/app/design'),
      '@icons': resolve(__dirname, '../src/app/design/Iconography'),
      '@theme': resolve(__dirname, '../src/app/design/Theme'),
    }
  },
  output: {
    path: resolve('build', 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.IS_BROWSER': JSON.stringify(true)
    }),
    new CleanWebpackPlugin({
      dry: true
    }),
    new ReactLoadablePlugin({
      filename: './build/react-loadable.json'
    })
    // new webpack.NamedModulesPlugin()
  ]
}

module.exports = smart(base, config)