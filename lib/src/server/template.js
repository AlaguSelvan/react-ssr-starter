// html template for server side rendering
export default function template(sheetsRegistry, helmet, state = {}, content = '', assets) {
  console.log(content, 'ssr')
  console.log(assets, 'assets')
  const css = sheetsRegistry.toString()
  const script = `<script>
        window.__STATE__ = ${JSON.stringify(state)}
   </script>
   <script src="/public/client.js"></script>`
  return `<!DOCTYPE html>
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
                <div id="app">
                <!--- Server Side Rendering -->${content}
                </div>
                ${assets.map((bundle) => `<script src='/public/${bundle}'></script>`)}
                <style id="jss-server-side">${css}</style>
                ${script}
              </body>`
}
