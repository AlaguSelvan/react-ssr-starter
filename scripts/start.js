const rimraf = require('rimraf')
const paths = require('../config/paths')
const { clientOnly } = require('./utils')

rimraf.sync(paths.clientBuild)
