import LoadableHOC from './LoadableHOC'

const desktopFirst = LoadableHOC({ loader: () => import('../containers/Desktop/First') })
const desktopSecond = LoadableHOC({ loader: () => import('../containers/Desktop/Second') })
const MobileHome = LoadableHOC({ loader: () => import('../containers/Mobile/Home') })
const MobileFirst = LoadableHOC({ loader: () => import('../containers/Mobile/About') })

export default [
  {
    path: '/',
    component: desktopFirst,
    exact: true
  },
  {
    path: '/2',
    component: desktopSecond,
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
