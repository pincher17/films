import { createSlice } from '@reduxjs/toolkit';
import { filmsApi } from '../api/api';

const newFilms = createSlice({
    name: 'newFilms',
    initialState: {
        films: [],
        limit: 10,
    },
    reducers: {
        addNewFilms(state, action) {
            console.log(action)
            state.films = action.payload;
        },
        addLimit(state) {
            state.limit = state.limit + 10;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
});

export const {addNewFilms, addLimit, removeTodo} = newFilms.actions;


export const getnewFilmsThunk = (limit) =>{
    return (dispatch) => {

        //dispatch(setFetching(true))
        filmsApi.getNewFilms(limit).then(response =>{
            dispatch(addNewFilms(response.data.docs))
            //dispatch(setFetching(false))
    })
    }
}


export default newFilms.reducer;