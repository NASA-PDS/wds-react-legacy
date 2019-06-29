import './css/App.css'
import ReactWidget from './../lib'

class App {
  constructor() {
    this.loadReactWidget()
  }

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
      console.log('myReactWidget Loaded!', myReactWidget)
    })()
  }
}

export default App
