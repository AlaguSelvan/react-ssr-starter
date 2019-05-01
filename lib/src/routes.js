import React from 'react'
import { serverFetch as homeFetch } from './redux/serverFetch'

import LoadableHOC from './LoadableHOC'
const AsyncHome = LoadableHOC({ loader: () => import('./App') })

export default [
  {
    path: '/',
    component: AsyncHome,
    serverFetch: homeFetch,
    exact: true
  }
]
