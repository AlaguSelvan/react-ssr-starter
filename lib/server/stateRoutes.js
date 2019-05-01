import MobileDetect from 'mobile-detect'
import { matchPath } from 'react-router-dom'
import render from './server'
import routes from '../src/routes'
import configureStore from '../src/redux/configureStore'

export default function(app) {
  app.get('*', (req, res) => {
    const store = configureStore()
    const dataRequirements = routes
      .filter(route => matchPath(req.url, route))
      .map(route => {
        return route.serverFetch ? route.serverFetch(store) : null
      })
    Promise.all(dataRequirements).then(() => {
      const md = new MobileDetect(req.headers['user-agent'])
      const response = render(req.url, store, md.mobile())
      res.send(response)
    })
  })
}