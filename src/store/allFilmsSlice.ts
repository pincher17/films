import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';
import { ArrayFilmsType, FilmsType } from '../types/FilmsType';
import { initialStateFiltersType } from './filtersSlice';

type initialStateType ={
    films: Array<FilmsType>
    page: number
}

const initialState: initialStateType ={
    films: [],
    page: 1,
}

const allFilms = createSlice({
    name: 'allFilms',
    initialState,
    reducers: {
        
        addFilms(state, action:PayloadAction<ArrayFilmsType>) {
            state.films = action.payload
        },
        addLimit(state) {
            state.page = state.page + 10;
        },
    },
});

export const {addFilms, addLimit} = allFilms.actions;


export const getAllFilmsThunk = (filters: initialStateFiltersType, page: any) =>{
    return (dispatch: any) => {

        //dispatch(setFetching(true))
        filmsApi.getFilms(filters, page).then((response: any) =>{
            debugger;
            dispatch(addFilms(response.data.docs))
            //dispatch(setFetching(false))
    })
    }
}


export default allFilms.reducer;