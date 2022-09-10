import { createSlice } from '@reduxjs/toolkit';
import { youtube } from '../api/youTubeAPI';

const youTubeTrailer = createSlice({
    name: 'youTubeTrailer',
    initialState: {
        trailer: [],
    },
    reducers: {
        addTrailer(state, action) {
            state.trailer = action.payload.items;
        },
    },
});

export const {addTrailer} = youTubeTrailer.actions;


export const getTrailerThunk = (nameFilm: string) =>{
    return (dispatch: any) => {

        //dispatch(setFetching(true))
        youtube.getTrailer(nameFilm).then((response: any) =>{
            dispatch(addTrailer(response.data))
            //dispatch(setFetching(false))
    })
    }
}


export default youTubeTrailer.reducer;