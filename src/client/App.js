import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './Router/routes'

export default function App() {
  return (
    <Switch>
      {routes.map(({ path, component, ...route }) => {
        console.log(route, 'debug')
        return (
          <Route key={path} component={component} {...route}/>
        )
      })}
    </Switch>
  )
}
