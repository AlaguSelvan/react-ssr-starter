import CleanCSS from 'clean-css'
import serialize from 'serialize-javascript'
// import { liveFiles } from '../manifest/liveFiles'

const cssOptions = {
  compatibility: {
    colors: {
      opacity: true
    },
    properties: {
      backgroundClipMerging: true,
      backgroundOriginMerging: true,
      backgroundSizeMerging: true,
      colors: true,
      ieBangHack: false,
      ieFilters: false,
      iePrefixHack: false,
      ieSuffixHack: false,
      merging: true,
      shorterLengthUnits: false,
      spaceAfterClosingBrace: true,
      urlQuotes: false,
      zeroUnits: true
    },
    selectors: {
      adjacentSpace: false,
      ie7Hack: true,
      mergeLimit: 8191,
      multiplePseudoMerging: true
    },
    units: {
      ch: true,
      in: true,
      pc: true,
      pt: true,
      rem: true,
      vh: true,
      vm: true,
      vmax: true,
      vmin: true
    }
  }
}

// const clientFile = process.env.NODE_ENV === 'production' ? liveFiles['client'] : 'client.js'
export default function template(sheetsRegistry, helmet, initialState, content, bundleScripts) {
  const css = sheetsRegistry.toString()
  //      <script src="/public/${clientFile}"></script>
  // const manifest = `<link rel="manifest" href="/public/manifest.json">`
  const minCss = new CleanCSS({ ...cssOptions }).minify(css)
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
                </head>
                <body>
                <style id="jss-server-side">${minCss.styles}</style>
                <div id="root" class="wrap-inner">${content}</div>
                <script src='/public/main.js' />
                ${bundleScripts}
                <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
              </body>`.trim()
  return page
}
