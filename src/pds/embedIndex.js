import TestApp from './TestApp'
import DoiSearch from './DoiSearch'

TestApp.init({
  env: 'dev',
  authId: 'xxxxxxx',
  apiKey: 'xxxxxxx',
})
console.log('TestApp Loaded!', TestApp);

DoiSearch.init({
  api: 'http://localhost:8085/PDS_APIs/pds_doi_api/0.2/'
})
console.log('DoiSearch Loaded!', DoiSearch);
