import React from 'react'
import * as ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './pages/Desktop/App'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple'

const state = window.__STATE__
const store = configureStore(state)
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#ffa800'
    }
  },
  typography: {
    useNextVariants: true
  }
})

// const renderMethod = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render
Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  )
})

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }

  if (!window.store) {
    window.store = store
  }
}
