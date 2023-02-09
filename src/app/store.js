import { configureStore } from '@reduxjs/toolkit';
import songReducers from '../features/songs/songSlice.js';


export const store = configureStore({
  reducer: {
    song: songReducers,
  },
});
