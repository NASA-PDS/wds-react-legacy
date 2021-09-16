import TestApp from './TestApp'
import DoiSearch from './DoiSearch'

TestApp.init({
  env: 'dev',
  authId: 'xxxxxxx',
  apiKey: 'xxxxxxx',
})
console.log('TestApp Loaded!', TestApp)

DoiSearch.init({
})
console.log('DoiSearch Loaded!', DoiSearch)
