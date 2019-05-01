import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple'

const state = window.__STATE__

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

hydrate(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
        {state.mobile === null ? <App /> : <App />}
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>,
    document.querySelector('#app')
)