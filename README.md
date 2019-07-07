 <div align="center">
  <h2>React Embeddable Widget Starter</h2>

</div>

## ⭐️ Features

- Webpack 4
- Babel 7
- Hot Reloading (`npm run dev`)
- CSS Autoprefixer
- SASS/SCSS support
- UMD exports, so your library works everywhere.
- Based on [CRA v3.0.0](https://github.com/facebook/create-react-app/releases/tag/v3.0.0) (For Vanilla JS libs or React libs)
- Jest unit testing
- `npm run demo` To build a ready-for-deployment demo
- Customizable file headers for your build
- Configurable `postinstall` message
- Daily [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/jasan-s/react-embeddable-widget-starter.git reactWidget
cd reactWidget
npm install
```

## 💎 Customization

> Before shipping, make sure to:

1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "reactWidget_js"` with your library's export name in `./config/webpack.config.js`
4. Edit `./bin/postinstall` (If you would like to display a message on package install)

## 🚀 Deployment

1. `npm run build`
2. use any static hosting service to deploy the `build` folder (\*use semantic versioning for updates, add CDN for performance)

### self-host/cdn

To test run: `npm run build` and then open the `index.html`(located in `src/selfHost-or-cdn-demo`)

```
    <!--  start reactWidget snippet -->
    <script>
      ;(function(window) {
        var s = document.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.crossOrigin = 'anonymous'
        s.src = '../../build/index.js'
        s.onload = () => {
          var s_s = document.getElementsByTagName('head')[0]
          s_s.insertAdjacentHTML(
            'beforeend',
            `<link rel="stylesheet" type="text/css" href="../../build/index.css" />`,
          )
          reactWidget.init({
            environment: 'dev',
            authId: 'xxxxxxx',
            apiKey: 'xxxxxxx',
          })
          console.log('reactWidget Loaded!', reactWidget)
        }
        var x = document.getElementsByTagName('script')[0]
        x.parentNode.insertBefore(s, x)
      })(window, undefined)
    </script>
    <!-- End reactWidget snippet -->
```
