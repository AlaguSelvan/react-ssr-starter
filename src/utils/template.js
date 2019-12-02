import CleanCSS from 'clean-css'
import serialize from 'serialize-javascript'
import manifest from '../../build/public/manifest.json'

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

export default function template(sheetsRegistry, helmet, initialState, content, bundleScripts) {
  const css = sheetsRegistry.toString()
  let mainScript = `<script src='${manifest['main.js']}' />`
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
                ${mainScript}
                ${bundleScripts}
                <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
                <script>
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js');
      }
    </script>
              </body>`.trim()
  return page
}
