import { createSlice } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';

type initialStateType ={
    resultSearch: Array<any>
}

const initialState: initialStateType ={
    resultSearch: []
}

const search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addResultSearch(state, action) {
            
            state.resultSearch = action.payload;
        },

    },
});

export const {addResultSearch} = search.actions;


export const getFilmSearch = (query: string) =>{
    return (dispatch: any) => {

        //dispatch(setFetching(true))
        filmsApi.getFilmSearch(query).then((response: any) =>{
            dispatch(addResultSearch(response.data.docs))
            //dispatch(setFetching(false))
    })
    }
}


export default search.reducer;