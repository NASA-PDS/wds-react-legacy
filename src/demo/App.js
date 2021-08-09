import './css/App.css'
import React from 'react'
import reactWidget from './../lib'
import Body from './components/Body';
import { Provider } from 'react-redux';
import configureStore from './store';

reactWidget.init({
  env: 'dev',
  authId: 'xxxxxxx',
  apiKey: 'xxxxxxx',
})
console.log('reactWidget Loaded!', reactWidget)

const App = () => {
  return <Provider store={configureStore()}>
    <Body/>
  </Provider>
}

export default App
