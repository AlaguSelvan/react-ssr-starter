module.exports = {
  "extends": [
    "prettier",
    "standard",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "space-before-function-paren": 0,
    "spaced-comment": 0,
    "no-dupe-keys": 0,
    "camelcase": 2,
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": false,
        "varsIgnorePattern": "csshook"
      }
    ]
  }
}