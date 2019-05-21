import LoadableHOC from './LoadableHOC'

const desktopFirst = LoadableHOC({ loader: () => import('../pages/Desktop/First') })
const desktopSecond = LoadableHOC({ loader: () => import('../pages/Desktop/Second') })
const MobileHome = LoadableHOC({ loader: () => import('../pages/Mobile/Home') })
const MobileFirst = LoadableHOC({ loader: () => import('../pages/Mobile/About') })
const routes = [
  {
    path: '/',
    component: desktopFirst,
    serverFetch: '',
    exact: true
  },
  {
    path: '/2',
    component: desktopSecond,
    serverFetch: '',
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
console.log(routes, 'routes')
export default routes
