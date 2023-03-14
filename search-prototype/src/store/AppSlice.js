import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../api/client';
import Config from '../Config';

const initialState = {
    searchText : '',
    searchResults: {},
    dataTypeEndPoint: 'data/collections',
    dataTypeText: 'Everything',
    dataTypeValue: 0
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

export const getSearchResults = createAsyncThunk(
    'posts/getSearchResults',
    async (initialSearch, { getState }) => {
        const state = getState().app;
        console.log("state", state);

        let url = Config.api + '/' + state.dataTypeEndPoint + '?keyword=' + encodeURI(state.searchText) + '&wt=json';
        if(state.dataTypeValue === 3){
            url = Config.tools + '&q=product-class%3Aproduct_service%20AND%20(title%3A*' + encodeURI(state.searchText)  + '*%20OR%20service_abstract_desc%3A*' + encodeURI(state.searchText)  + '*%20OR%20service_description%3A*' + encodeURI(state.searchText)  + '*)&wt=json';
        }

        console.log('url', url);
        const response = await client.get(url);
        console.log('response', response);

        let data;
        if(state.dataTypeValue === 3){
            data = {data: response.data.response.docs};
        }
        else{
            data = response.data;
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
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getSearchResults.fulfilled, (state, action) => {
                state.searchResults = (action.payload);
            })
    }
})

export const { setSearchText, setDataTypeValue } = appSlice.actions;
export default appSlice.reducer;
