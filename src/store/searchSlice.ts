import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';
import { ArrayFilmsType, FilmsType } from '../types/FilmsType';

type initialStateType ={
    resultSearch: Array<FilmsType>
    resultSearchPage: Array<FilmsType>
    resultSearchTotal: number
    currentPage: number
    totalPages: number | null
}

const initialState: initialStateType ={
    resultSearch: [],
    resultSearchPage: [],
    resultSearchTotal: 0,
    currentPage: 1,
    totalPages: null
}

const search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addResultSearch(state, action:PayloadAction<ArrayFilmsType>) {
            state.resultSearch = action.payload;
        },
        refreshResultSearchPage(state) {
            state.resultSearchPage = [];
        },
        addResultSearchPage(state, action:PayloadAction<ArrayFilmsType>) {
            state.resultSearchPage = state.resultSearchPage.concat(action.payload);
        },
        addResultSearchTotal(state, action:PayloadAction<number>) {
            state.resultSearchTotal = action.payload;
        },
        addCurrentPage(state, action:PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        addTotalPages(state, action:PayloadAction<number>) {
            state.totalPages = action.payload;
        },
    },
});

export const {addResultSearch, addResultSearchPage, 
                addResultSearchTotal, addCurrentPage, addTotalPages,
                refreshResultSearchPage} = search.actions;


export const getFilmSearch = (query: string) =>{
    return (dispatch: any) => {

        //dispatch(setFetching(true))
        filmsApi.getFilmSearch(query).then((response: any) =>{
            dispatch(addResultSearch(response.data.docs))
            //dispatch(setFetching(false))
    })
    }
}

export const getFilmSearchPage = (query: string, page: number) =>{
    return (dispatch: any) => {

        //dispatch(setFetching(true))
        filmsApi.getFilmSearch(query, page).then((response: any) =>{
            dispatch(addResultSearchPage(response.data.docs))
            dispatch(addResultSearchTotal(response.data.total))
            dispatch(addCurrentPage(response.data.page))
            dispatch(addTotalPages(response.data.pages))
            //dispatch(setFetching(false))
    })
    }
}



export default search.reducer;