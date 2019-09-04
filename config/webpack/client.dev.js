const baseConfig = require('./client.base');
const webpack = require('webpack');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true;
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin
const { resolve } = require('path')

const config = {
  ...baseConfig,
  plugins: [
    // new ReactLoadablePlugin({
    //   filename: resolve('build', 'public', 'react-loadable.json')
    // }),
    new WriteFileWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    ...baseConfig.plugins,
  ],
  mode: 'development',
  devtool: generateSourceMap ? 'cheap-module-inline-source-map' : false,
  performance: {
    hints: false,
  },
};

module.exports = config;
