import { all, call, put, takeLatest } from 'redux-saga/effects';
import Config from '../Config';
import { recordNotFound } from '../sagas/error';
import { LidvidUtil } from './LidvidUtil';

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
    let parentData;

    if(isSingleResult){
        data = [data];
    }
    
    if (data.length === 0) {
        data = recordNotFound;

        let parentIdentifier = action.payload;
        if(LidvidUtil.isLidOrLidvid(parentIdentifier)){
            if(LidvidUtil.isProductLidvid(parentIdentifier)){
                let collectionLid = LidvidUtil.trimProductLidvidToCollectionLid(parentIdentifier);

                let parentEndpoint = Config.api + 'dois';
                if(api){
                    parentEndpoint = api + 'dois';
                }

                parentIdentifier = collectionLid.replace(/\//g, '-') + '*';
                parentIdentifier = '*' + parentIdentifier;
                parentEndpoint += '?ids=' + encodeURIComponent(parentIdentifier);

                const parentResponse = yield call(fetch, parentEndpoint);
            
                parentData = yield parentResponse.json();

                if(parentData.length === 0){
                    parentIdentifier = LidvidUtil.removeDoubleColon(parentIdentifier);
                    if(LidvidUtil.isCollectionLid(parentIdentifier)){
                        let bundle = LidvidUtil.trimCollectionLidToBundle(parentIdentifier);
        
                        let parentEndpoint = Config.api + 'dois';
                        if(api){
                            parentEndpoint = api + 'dois';
                        }
        
                        parentIdentifier = bundle.replace(/\//g, '-') + '*';
                        parentIdentifier = '*' + parentIdentifier;
                        parentEndpoint += '?ids=' + encodeURIComponent(parentIdentifier);
        
                        const parentResponse = yield call(fetch, parentEndpoint);
                    
                        parentData = yield parentResponse.json();
                    }
                }
            }
            else if(LidvidUtil.isCollectionLid(parentIdentifier)){
                let bundle = LidvidUtil.trimCollectionLidToBundle(parentIdentifier);

                let parentEndpoint = Config.api + 'dois';
                if(api){
                    parentEndpoint = api + 'dois';
                }

                parentIdentifier = bundle.replace(/\//g, '-') + '*';
                parentIdentifier = '*' + parentIdentifier;
                parentEndpoint += '?ids=' + encodeURIComponent(parentIdentifier);

                const parentResponse = yield call(fetch, parentEndpoint);
            
                parentData = yield parentResponse.json();
            }
        }
    }

    yield put({type: 'RENDER_SEARCH_RESULTS', payload: {identifier, data, parentData}});
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