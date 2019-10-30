module.exports = {
  compact: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 9']
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'react-hot-loader/babel',
    'react-loadable/babel',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ]
}
