import path from 'path'
import LoadableHOC from './LoadableHOC'

const desktopFirst = LoadableHOC({
  loader: () => import('../pages/Desktop/First' /* webpackChunkName: "First" */),
  webpack: () => [require.resolveWeak('../pages/Desktop/First')],
  modules: ['../pages/Desktop/First'],
  path: ({ page }) => path.join(__dirname, `/public/${page}`)
})

const desktopSecond = LoadableHOC({
  loader: () => import('../pages/Desktop/Second' /* webpackChunkName: "Second" */),
  webpack: () => [require.resolveWeak('../pages/Desktop/Second')],
  modules: ['../pages/Desktop/Second'],
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
  }
]
