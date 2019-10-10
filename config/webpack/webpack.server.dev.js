const path = require('path');
const webpack = require('webpack');
// const externals = require('./node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  name: 'server',
  target: 'node',
  // externals,
  entry: './src/server/server.js',
  mode: 'development',
  output: {
    filename: 'dev-server-bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../../build'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
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
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         onlyLocals: true,
      //         modules: {
      //           mode: 'local',
      //           localIdentName:
      //             '[name]__[local]--[hash:base64:5]',
      //         },
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         // Prefer `dart-sass`
      //         implementation: require('sass'),
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(jpg|svg|png|ico|gif|eot|woff|ttf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '/images/[name].[ext]',
      //         emitFile: false,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.md$/,
      //   use: [
      //     {
      //       loader: 'markdown-with-front-matter-loader',
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
