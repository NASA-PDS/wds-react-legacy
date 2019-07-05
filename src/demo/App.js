import './css/App.css'
import reactWidget from './../lib'
reactWidget.init({
  env: 'dev',
  authId: 'xxxxxxx',
  apiKey: 'xxxxxxx',
})
console.log('reactWidget Loaded!', reactWidget)
const App = () => {
  return null
}

export default App
