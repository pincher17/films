import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type initialStateFiltersType ={
     year: string
    rating: string
    sortByRelease: string
     genre: string
    }


const initialState: initialStateFiltersType ={
        year: `1960-2022`,
        rating: '1-10',
        sortByRelease: '-1',
        genre: ''
}

const filters = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterYear(state, action:PayloadAction<string>) {
            state.year = action.payload
        },
        setFilterRating(state, action:PayloadAction<string>) {
            state.rating = action.payload
        },
        setFilterRelease(state, action:PayloadAction<string>) {
            state.sortByRelease = action.payload
        },
        setFilterGenre(state, action:PayloadAction<string>) {
            state.genre = action.payload
        },
    },
});

export const {setFilterYear, setFilterRating, setFilterRelease,
                setFilterGenre} = filters.actions;




export default filters.reducer;