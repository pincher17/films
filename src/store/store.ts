import { configureStore } from '@reduxjs/toolkit';
import filmInfo from './filmInfoSlice';
import newFilmsReducer from './newFilmsSlice';
import searchSlice from './searchSlice';
import youTubeTrailer from './youtubeSlice';

/* const rootReducer = combineReducers({
  newFilms: newFilmsReducer,
  trailer: youTubeTrailer,
  filmInfo: filmInfo,
}) */

/* export default configureStore({
  reducer: rootReducer,
}); */

const store = configureStore({
  reducer: {
  newFilms: newFilmsReducer,
  trailer: youTubeTrailer,
  filmInfo: filmInfo,
  search: searchSlice,
  },
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store