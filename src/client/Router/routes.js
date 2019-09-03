import path from 'path'
import LoadableHOC from './LoadableHOC'

const desktopFirst = LoadableHOC({
  loader: () => import('../pages/Desktop/First' /* webpackChunkName: "First" */),
  webpack: () => [require.resolveWeak('../pages/Desktop/First')],
  modules: ['../pages/Desktop/First'],
  path: ({ page }) => path.join(__dirname, `/public/${page}`)
})
const desktopThird = LoadableHOC({
  loader: () => import('../pages/Desktop/Third' /* webpackChunkName: "Third" */),
  webpack: () => [require.resolveWeak('../pages/Desktop/Third')],
  modules: ['../pages/Desktop/Third'],
  path: ({ page }) => path.join(__dirname, `/public/${page}`)
})

const desktopSecond = LoadableHOC({
  loader: () => import('../pages/Desktop/Second' /* webpackChunkName: "Second" */),
  webpack: () => [require.resolveWeak('../pages/Desktop/Second')],
  modules: ['../pages/Desktop/Second'],
  path: ({ page }) => path.join(__dirname, `/public/${page}`)
})

const MobileHome = LoadableHOC({
  loader: () => import('../pages/Mobile/Home' /* webpackChunkName: "mobHome" */),
  webpack: () => [require.resolveWeak('../pages/Mobile/Home')],
  modules: ['../pages/Mobile/Home'],
  path: ({ page }) => path.join(__dirname, `/public/${page}`)
})

const MobileFirst = LoadableHOC({
  loader: () => import('../pages/Mobile/About' /* webpackChunkName: "about" */),
  webpack: () => [require.resolveWeak('../pages/Mobile/About')],
  modules: ['../pages/Mobile/About'],
  path: ({ page }) => path.join(__dirname, `/public/${page}`)
})

export default [
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
  },
  {
    path: '/3',
    component: desktopThird,
    serverFetch: '',
    exact: true
  }
]
