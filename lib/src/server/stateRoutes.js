import MobileDetect from 'mobile-detect'
import { matchPath } from 'react-router-dom'
import render from './server'
import routes from '../client/Router/routes'
import configureStore from '../client/redux/configureStore'

export default function(app) {
  app.get('*', (req, res) => {
    const store = configureStore()
    const dataRequirementsDesktop = routes
      .filter(route => matchPath(req.url, route))
      .map(route => route.serverFetch ? route.serverFetch(store) : store)
    Promise.all([dataRequirementsDesktop]).then(() => {
      const md = new MobileDetect(req.headers['user-agent'])
      const response = render(req.url, store, md.mobile())
      return res.send(response)
    })
  })
}
