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
3. Edit `library: "reactWidget"` with your library's export name in `./config/webpack.config.js`
4. Edit `./bin/postinstall` (If you would like to display a message on package install)

## 🚀 Deployment

1. `npm publish`
2. Your users can include your library as usual

### npm

```
  import ReactWidget from 'reactWidget'
   // then  invoke loadReactWidget()
  loadReactWidget = () => {
    ;(function() {
      const reactWidget__container = document.createElement('div')
      reactWidget__container.setAttribute('id', 'reactWidget__container')
      document.body.appendChild(reactWidget__container)
      ReactWidget.config({
        environment: 'dev',
        authId: 'xxxxxxx',
        apiKey: 'xxxxxxx',
      })
      var myReactWidget = ReactWidget.widgets.myWidget.new({
        selector: '#reactWidget__container',
      })
      myReactWidget.render({ arg: {} })
      console.log('ReactWidget Loaded!', ReactWidget)
    })()
...
```

### self-host/cdn

To test run: `npm run build` and then open the `index.html`(located in `src/selfHost-or-cdn-demo`)

```
    <!--  start reactWidget snippet -->
    <script>
      ;(function(window) {
        var s = document.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = './build/index.js'
        s.onload = () => {
          var reactWidget__container = document.createElement('div')
          reactWidget__container.setAttribute('id', 'reactWidget__container')
          document.body.appendChild(reactWidget__container)

          var s_s = document.getElementsByTagName('head')[0]
          s_s.insertAdjacentHTML(
            'beforeend',
            `<link rel="stylesheet" type="text/css" href="./build/index.css" />`,
          )
          var reactWidget = window.reactWidget.default
          reactWidget.config({
            environment: 'dev',
            authId: 'xxxxxxx',
            apiKey: 'xxxxxxx',
          })
          var myReactWidget = reactWidget.widgets.myWidget.new({
            selector: '#reactWidget__container',
          })
          window.myReactWidget = myReactWidget
          myReactWidget.render({ arg: null })
        }
        var x = document.getElementsByTagName('script')[0]
        x.parentNode.insertBefore(s, x)
      })(window, undefined)
    </script>
    <!-- End reactWidget snippet -->
...
```
