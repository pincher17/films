import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';
import { ArrayFilmsType, FilmsType } from '../types/FilmsType';

type initialStateType ={
    films: Array<FilmsType>
    limit: number
}

const initialState: initialStateType ={
    films: [],
    limit: 10,
}

const newFilms = createSlice({
    name: 'newFilms',
    initialState,
    reducers: {
        addNewFilms(state, action:PayloadAction<ArrayFilmsType>) {
            state.films = action.payload
        },
        addLimit(state) {
            state.limit = state.limit + 10;
        },
    },
});

export const {addNewFilms, addLimit} = newFilms.actions;


export const getnewFilmsThunk = (limit: any) =>{
    return (dispatch: any) => {

        //dispatch(setFetching(true))
        filmsApi.getNewFilms(limit).then((response: any) =>{
            dispatch(addNewFilms(response.data.docs))
            //dispatch(setFetching(false))
    })
    }
}


export default newFilms.reducer;