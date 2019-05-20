import MobileDetect from 'mobile-detect'
import { matchPath } from 'react-router-dom'
import render from './server'
import routes from '../src/containers/Desktop/routes'
import routesMobile from '../src/containers/Mobile/routes'
import configureStore from '../src/redux/configureStore'

export default function(app) {
  app.get('*', (req, res) => {
    const store = configureStore()
    const dataRequirementsDesktop = routes
      .filter(route => matchPath(req.url, route))
      .map(route => route.serverFetch ? route.serverFetch(store) : store)
    const dataRequirementsMobile = routesMobile
      .filter(route => matchPath(req.url, route))
      .map(route => route.serverFetch ? route.serverFetch(store) : store)
    Promise.all([dataRequirementsDesktop, dataRequirementsMobile]).then(() => {
      const md = new MobileDetect(req.headers['user-agent'])
      const response = render(req.url, store, md.mobile())
      return res.send(response)
    })
  })
}
