export default function template(sheetsRegistry, helmet, state = {}, content = '', bundles) {
  const css = sheetsRegistry.toString()
  const script = `<script>
        window.__STATE__ = ${JSON.stringify(state)}
   </script>
   <script src="/public/client.js"></script>`
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
                <link rel="manifest" href="/public/manifest.json">
                </head>
                <body>
                <div id="app" class="wrap-inner">
                <!--- Server Side Rendering -->${content}
                </div>
    ${bundles.map((bundle, index) => {
    return `<script key=${index} src='/public/${bundle.file}'></script>`
  }).join('\n')}
                <style id="jss-server-side">${css}</style>
                ${script}
              </body>`
  return page
}
