import React from 'react'
import { renderToString } from 'react-dom/server'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from '../../build/public/react-loadable.json'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import purple from '@material-ui/core/colors/purple'
import App from '../client/pages/Desktop/App'
import template from './template'
// import { SheetsRegistry } from 'react-jss/lib/jss'
// import JssProvider from 'react-jss/lib/JssProvider'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// import createGenerateClassName from '@material-ui/styles/createGenerateClassName'
// import MobileApp from '../client/pages/Mobile/App'

export default function ssr(url, store, mobile) {
  const reactRouterContext = {}
  // const sheetsRegistry = new SheetsRegistry()
  // const sheetsManager = new Map()
  const sheets = new ServerStyleSheets()

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
  // const generateClassName = createGenerateClassName()

  let modules = []

  let content = renderToString(
    sheets.collect(
      <StaticRouter location={url} context={reactRouterContext}>
        <Provider store={store} >
          {/* <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}> */}
          <ThemeProvider theme={theme}>
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
              {/* {mobile === null ? <App /> : <MobileApp />} */}
              <App />
            </Loadable.Capture>
          </ThemeProvider>
          {/* </JssProvider> */}
        </Provider>
      </StaticRouter>
    )
  )
  let bundles = getBundles(stats, modules)
  const helmet = Helmet.renderStatic()
  const state = store.getState()
  const css = sheets.toString()

  return template(css, helmet, state, content, bundles)
}
