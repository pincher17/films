import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';
import { FilmInfoType } from '../types/film';

type initialStateType ={
    info: FilmInfoType | null
    preview: string
    countries: Array<any>
    genres: Array<any>
    ratingKinopoisk: number | null
}

const initialState: initialStateType ={
    info: null,
    preview: '',
    countries: [],
    genres: [],
    ratingKinopoisk: null,
}

const filmInfo = createSlice({
    name: 'filmInfo',
    initialState,
    reducers: {
        addFilmInfo(state, action:PayloadAction<FilmInfoType>) {
            
            state.info = action.payload;
            state.preview = action.payload.poster.previewUrl
            state.countries = action.payload.countries
            state.genres = action.payload.genres
            state.ratingKinopoisk = action.payload.rating.kp
        },
    },
});

export const {addFilmInfo} = filmInfo.actions;


export const getFilmById = (id: any) =>{
    return (dispatch:any) => {

        //dispatch(setFetching(true))
        filmsApi.getFilmById(id).then((response: any) =>{
            dispatch(addFilmInfo(response.data))
            //dispatch(setFetching(false))
    })
    }
}


export default filmInfo.reducer;