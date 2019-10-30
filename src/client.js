import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import configureStore from './client/redux/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import App from './client/App'

const state = window.__INITIAL_STATE__
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

const render = () => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  renderMethod(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  )
}

Loadable.preloadReady().then(() => {
  render()
})
