import { configureStore } from '@reduxjs/toolkit';
import newFilmsReducer from './newFilmsSlice';


export default configureStore({
  reducer: {
    newFilms: newFilmsReducer,
  },
});
