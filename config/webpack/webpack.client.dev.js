const webpack = require('webpack')
const { resolve } = require('path')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin
const OfflinePlugin = require('offline-plugin')
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
    new webpack.ProgressPlugin((percentage, message) => {
      console.log(`${(percentage * 100).toFixed()}% ${message}`);
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new OfflinePlugin({
		caches: {
			main: [
				'vendor.*.js',
				'assets/icons.*.*'
			],
			additional: [':externals:'],
			optional: [':rest:']
		},
		externals: [
			'https://fonts.googleapis.com/css?family=Montserrat:100'
		],
		safeToUseOptionalCaches: true,
		AppCache: false
	})
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
