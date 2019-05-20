module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets':
        {
          'node': 'current'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'react-loadable/babel'
  ]
}
