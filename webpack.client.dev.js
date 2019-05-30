const { resolve } = require('path')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '/public/',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/public/react-loadable.json'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
    // new CleanWebpackPlugin({
    //   dry: true,
    //   verbose: true,
    //   cleanStaleWebpackAssets: false,
    //   protectWebpackAssets: false,
    //   cleanOnceBeforeBuildPatterns: ['**/*', 'dist']
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
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
