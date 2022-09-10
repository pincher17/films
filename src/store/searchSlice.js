import { createSlice } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';

const search = createSlice({
    name: 'search',
    initialState: {
        resultSearch: [],
        
    },
    reducers: {
        addResultSearch(state, action) {
            
            state.resultSearch = action.payload;
        },

    },
});

export const {addResultSearch} = search.actions;


export const getFilmSearch = (query) =>{
    return (dispatch) => {

        //dispatch(setFetching(true))
        filmsApi.getFilmSearch(query).then(response =>{
            dispatch(addResultSearch(response.data.docs))
            //dispatch(setFetching(false))
    })
    }
}


export default search.reducer;