import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../api/client';
import Config from '../Config';

const initialState = {
    searchText : '',
    searchResults: {}
}

export const getSearchResults = createAsyncThunk(
    'posts/getSearchResults',
    async (initialSearch) => {
        console.log("initial search", initialSearch);
        let url = Config.api + '?keyword=' + encodeURI(initialSearch) + '&wt=json';
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
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getSearchResults.fulfilled, (state, action) => {
                state.searchResults = (action.payload);
            })
    }
})

export const { setSearchText } = appSlice.actions;
export default appSlice.reducer;
