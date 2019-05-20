import LoadableHOC from './LoadableHOC'

const asyncFirst = LoadableHOC({ loader: () => import('../Desktop/First'), loading: 'loading' })
const asyncSecond = LoadableHOC({ loader: () => import('../Desktop/Second'), loading: 'loading' })
const MobileHome = LoadableHOC({ loader: () => import('../Mobile/Home') })
const MobileFirst = LoadableHOC({ loader: () => import('../Mobile/About') })

export default [
  {
    path: '/',
    component: asyncFirst,
    exact: true
  },
  {
    path: '/2',
    component: asyncSecond,
    exact: true
  },
  {
    path: '/mobile',
    component: MobileHome,
    serverFetch: '',
    exact: true
  },
  {
    path: '/mobile/About',
    component: MobileFirst,
    serverFetch: '',
    exact: true
  }
]
