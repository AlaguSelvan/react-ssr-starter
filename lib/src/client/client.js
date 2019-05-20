import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/Desktop/App'
import Mobile from './containers/Mobile/App'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple'

const state = window.__STATE__
const store = configureStore(state)
console.log(store, 'store')
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
Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          {store.mobile === null ? <App /> : <Mobile />}
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>,
    document.querySelector('#app')
  )
})
