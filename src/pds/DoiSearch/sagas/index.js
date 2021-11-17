import { all, call, put, takeLatest } from 'redux-saga/effects';
import Config from '../Config';
import { recordNotFound } from '../sagas/error';

function* sendLidvidSearch(api, action){
    const lidvid = action.payload;

    let endpoint = Config.api + 'doi';
    if(api){
        endpoint = api + 'doi';
    }

    endpoint += '?identifier=' + encodeURIComponent(lidvid);

    const response = yield call(fetch, endpoint);
    let data = yield response.json();

    if(!data.errors){
        data = {
            data
        }
    }
    else{
        data = {
            data
        }
    }

    yield put({ type: 'RENDER_DOI_SEARCH_RESULTS', payload: data});
}

function* sendLidvidSearchRequest(api){
    yield takeLatest('SEND_LIDVID_SEARCH_REQUEST', sendLidvidSearch, api);
}


function* sendSearch(api, action){
    let identifier = action.payload ? action.payload : '*';

    let endpoint = Config.api + 'dois';
    if(api){
        endpoint = api + 'dois';
    }

    let isSingleResult = false;
    
    if (identifier.startsWith('10.')) {
        endpoint += '?doi=' + encodeURIComponent(identifier);
    }
    else{
        let searchIdentifier = identifier.replace(/\//g, '-') + '*';
        identifier = '*' + searchIdentifier;
        endpoint += '?ids=' + encodeURIComponent(identifier);
    }
    
    const response = yield call(fetch, endpoint);
    let data = yield response.json();

    if(isSingleResult){
        data = [data];
    }
    
    if (data.length === 0) {
        data = recordNotFound;
    }

    yield put({type: 'RENDER_SEARCH_RESULTS', payload: {identifier, data}});
}

function* sendSearchRequest(api){
    yield takeLatest('SEND_SEARCH_REQUEST', sendSearch, api);
}

export default function* rootSaga(api){
    yield all([
        sendLidvidSearchRequest(api),
        sendSearchRequest(api)
    ])
}