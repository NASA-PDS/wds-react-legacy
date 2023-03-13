import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../api/client';
import Config from '../Config';

const initialState = {
    searchText : '',
    searchResults: {},
    dataTypeEndPoint: 'data/collection',
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
        //Tools. Unavailable. Can try old tool search.
        return 'classes/collections'
    }
    else if(dataTypeValue === 3){
        //Documents. 
        return 'classes/documents';
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
        console.log('url', url);
        const response = await client.get(url);
        
        return response.data
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
