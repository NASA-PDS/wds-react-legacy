import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../api/client';
import Config from '../Config';

const initialState = {
    searchText : '',
    searchResults: {},
    dataTypeEndPoint: 'classes/collections',
    dataTypeText: 'Everything',
    dataTypeValue: 0,
    paginationPage: 1
}

const getDataTypeEndpoint = (dataTypeValue) => {
    if(dataTypeValue === 0){
        //Everything. Unavailable.
        return 'classes/collections';
    }
    else if(dataTypeValue === 1){
        //Data.
        return 'classes/collections';
    }
    else if(dataTypeValue === 2){
        //Documents. 
        return 'classes/documents';  
    }
    else if(dataTypeValue === 3){
       //Tools. Unavailable. Can try old tool search.
       return ''
    }
    else{
        return '';
    }
}

const getDataTypeText = (dataTypeValue) => {
    if(dataTypeValue === 0){
        return 'Everything';
    }
    else if(dataTypeValue === 1){
        return 'Data';
    }
    else if(dataTypeValue === 2){
        return 'Documents';  
    }
    else if(dataTypeValue === 3){
       return 'Tools'
    }
    else{
        return '';
    }
}

const getStartValue = (page, limit) => {
    return (page - 1) * limit;
}

export const getSearchResults = createAsyncThunk(
    'posts/getSearchResults',
    async (initialSearch, { getState }) => {
        const state = getState().app;
        console.log("state", state);

        const limit = 100; //rows to return.
        const start = getStartValue(state.paginationPage, limit);

        let url = Config.api + '/' + state.dataTypeEndPoint + '?keywords=' + encodeURI(state.searchText) + '&wt=json&limit=' + limit + '&start=' + start;
        if(state.dataTypeValue === 3){
            url = Config.tools + '&q=product-class%3Aproduct_service%20AND%20(title%3A*' + encodeURI(state.searchText)  + '*%20OR%20service_abstract_desc%3A*' + encodeURI(state.searchText)  + '*%20OR%20service_description%3A*' + encodeURI(state.searchText)  + '*)&wt=json&rows=' + limit + '&start=' + start;
        }

        console.log('url', url);
        const response = await client.get(url);
        console.log('response', response);

        let data;
        if(state.dataTypeValue === 3){
            data = {
                data: {
                    data: response.data.response.docs,
                    summary: {
                        hits: response.data.response.numFound,
                        start: response.data.response.start,
                        limit: 100,
                        took: response.data.responseHeader.QTime,
                        searchText: state.searchText
                    }
                }
            }
        }
        else{
            data = {
                data: response.data,
            }

            data.data.summary.searchText = state.searchText
        }

        return data
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setDataTypeValue: (state, action) => {
            state.dataTypeValue = action.payload;
            state.dataTypeEndPoint = getDataTypeEndpoint(action.payload);
            state.dataTypeText = getDataTypeText(action.payload);
        },
        setPaginationPage: (state, action) => {
            state.paginationPage = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getSearchResults.fulfilled, (state, action) => {
                state.searchResults = (action.payload.data);
            })
    }
})

export const { setSearchText, setDataTypeValue, setPaginationPage} = appSlice.actions;
export default appSlice.reducer;
