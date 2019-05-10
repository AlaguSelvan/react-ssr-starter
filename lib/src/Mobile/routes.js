import React from 'react'
import { serverFetch as homeFetch } from '../redux/serverFetch'

import LoadableHOC from '../LoadableHOC'
const MobileHome = LoadableHOC({ loader: () => import('./Home') })
const MobileFirst = LoadableHOC({ loader: () => import('./About') })

export default [
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
