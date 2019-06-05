const { resolve } = require('path')
const smart = require('webpack-merge')
const common = require('./webpack.config')
const definePluginArgs = {
	'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
	'process.env.PORT': JSON.stringify(PORT),
	'process.env.HOST': JSON.stringify(HOST)
}
const config =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.client.prod')
    : require('./webpack.client.prod')

const base = {
  output: {
    path: resolve('dist', 'public'),
    publicPath: '/public/'
  }
}

module.exports = smart(common, base, config)
