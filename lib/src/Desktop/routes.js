import React from 'react'
// import { serverFetch as homeFetch } from '../redux/serverFetch'
import Loadable from 'react-loadable';

const asyncFirst = Loadable({ loader: () => import('./First'), loading: 'loading' })
const asyncSecond = Loadable({ loader: () => import('./Second'), loading: 'loading' })

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
  }
]
