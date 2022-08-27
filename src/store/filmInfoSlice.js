import { createSlice } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';

const filmInfo = createSlice({
    name: 'filmInfo',
    initialState: {
        info: {},
        selectedFilm: '',

    },
    reducers: {
        addFilmInfo(state, action) {
            
            state.info = action.payload;
        },
        chooseMovie(state, action) {
            
            state.selectedFilm = action.payload;
        },
    },
});

export const {addFilmInfo, chooseMovie} = filmInfo.actions;


export const getFilmById = (id) =>{
    return (dispatch) => {

        //dispatch(setFetching(true))
        filmsApi.getFilmById(id).then(response =>{
            dispatch(addFilmInfo(response.data))
            //dispatch(setFetching(false))
    })
    }
}


export default filmInfo.reducer;