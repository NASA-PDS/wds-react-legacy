import { all, call, put, takeLatest } from 'redux-saga/effects';
import Config from '../Config';
import { doiNotFound, recordNotFound } from '../sagas/error';

function* sendLidvidSearch(action){
    const lidvid = action.payload;

    let endpoint = Config.api.getDoiByIdentifier;
    endpoint += encodeURIComponent(lidvid);

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

function* sendLidvidSearchRequest(){
    yield takeLatest('SEND_LIDVID_SEARCH_REQUEST', sendLidvidSearch);
}

function* sendDoiSearch(action){
    const doi = action.payload;
    
    let doiEndpoint = Config.api.getDoiByDoiUrl + '?doi=';
    doiEndpoint += encodeURIComponent(doi);

    const doiResponse = yield call(fetch, doiEndpoint);
    let doiData = yield doiResponse.json();
    let data;

    let hasErrors = false;
    let lidvid;
    if(!doiData.errors){
        if(doiData.length < 1){
            hasErrors = true;
            data = {data: doiNotFound};
        }
        else{
            lidvid = doiData[0].lidvid;
        }
    }
    else{
        hasErrors = true;
        data = {
            doiData
        }
    }

    if(!hasErrors){
        let lidvidEndpoint = Config.api.getDoiByLidvidUrl;
        lidvidEndpoint += encodeURIComponent(lidvid);

        const responseLidvid = yield call(fetch, lidvidEndpoint);
        let lidvidData = yield responseLidvid.json();

        if(!lidvidData.errors){
            data = {
                data: lidvidData
            }
        }
        else{
            data = {
                lidvidData
            }
        }
    }

    yield put({ type: 'RENDER_DOI_SEARCH_RESULTS', payload: data});
}

function* sendDoiSearchRequest(){
    yield takeLatest('SEND_DOI_SEARCH_REQUEST', sendDoiSearch);
}

function* sendPds4LabelUrlSearch(action){
    const {labelUrl, submitter, node, force} = action.payload;

    let endpoint = Config.api.getDoiByPds4LabelUrl;
    endpoint += '?action=draft';
    endpoint += '&submitter=' + submitter;
    endpoint += '&node=' + node;
    endpoint += '&url=' + encodeURI(labelUrl);
    if (force) endpoint += '&force=' + force;
    
    const response = yield fetch(endpoint, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        }
    });

    let data = yield response.json();

    if(!data.errors){
        if(data.length < 1){
            data = {
                data: doiNotFound
            };
        }
        else{
            data = data[0];
            data = {
                data: data
            }
        }
    }
    else{
        data = {
            data
        }
    }

    yield put({ type: 'RENDER_URL_SEARCH_RESULTS', payload: data});
}

function* sendPdsLabelUrlSearchRequest(){
    yield takeLatest('SEND_PDS4_LABEL_SEARCH_REQUEST', sendPds4LabelUrlSearch);
}


function* sendSearch(action){
    let identifier = action.payload ? action.payload : '*';
    let endpoint = Config.api.searchUrl;
    let isSingleResult = false;
    
    if (identifier.startsWith('10.')) {
        endpoint += '?doi=' + encodeURIComponent(identifier);
    }
    else{
        if(!identifier.startsWith('urn:nasa:pds:')) {
            let searchIdentifier = identifier.replace(/\//g, '-') + '*';
            identifier = '*' + searchIdentifier;
            endpoint += '?identifier=' + encodeURIComponent(identifier);
        }
        else{
            isSingleResult = true;
            endpoint = Config.api.getDoiByIdentifier;
            endpoint += '?identifier=' + encodeURIComponent(identifier);
        }
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

function* sendSearchRequest(){
    yield takeLatest('SEND_SEARCH_REQUEST', sendSearch);
}

export default function* rootSaga(){
    yield all([
        sendLidvidSearchRequest(),
        sendDoiSearchRequest(),
        sendPdsLabelUrlSearchRequest(),
        sendSearchRequest()
    ])
}