import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple'

const state = window.__STATE__
const store = configureStore(state)
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336'
    }
  },
  typography: {
    useNextVariants: true
  }
})

// const renderMethod = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render
Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
  )
})
