import TestApp from './TestApp';
import DoiSearch from './DoiSearch';

TestApp.init({
})
console.log('TestApp Loaded!', TestApp);


let api;
if(document.getElementById('DoiSearch')){
  if(document.getElementById('DoiSearch').dataset.api){
    api = document.getElementById('DoiSearch').dataset.api;
  }
}

DoiSearch.init({
  api: api
})
console.log('DoiSearch Loaded!', DoiSearch);