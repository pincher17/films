import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

export default configureStore({
  reducer: {
  newFilms: newFilmsReducer,
  trailer: youTubeTrailer,
  filmInfo: filmInfo,
  search: searchSlice,
  },
});