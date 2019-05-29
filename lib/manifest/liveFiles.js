// @preval
import { readdirSync } from 'fs'
import { compose, merge, filter, reduce, equals, last, split, map, head, converge, identity, objOf } from 'ramda'

const jsFilter = compose(equals('js'), last, split('.'))

const jsFiles = compose(filter(jsFilter))(readdirSync('./dist/public'))
const fileName = compose(head, split('.'))
export const liveFiles = compose(
  reduce(merge, {}),
  map(converge(objOf, [fileName, identity])))(jsFiles)
