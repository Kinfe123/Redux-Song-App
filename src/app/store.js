import { configureStore } from '@reduxjs/toolkit';
import songReducers from '../features/songs/songSlice.js';
import createSagaMiddleware from '@redux-saga/core';
import { songSaga , songSagaCreate , songSagaDelete , songSagaEdit} from '../saga/songSaga.js';



const saga = createSagaMiddleware()


export const store = configureStore({
  reducer: {
    song: songReducers,
  },
  middleware:[saga]
});
saga.run(songSaga)
saga.run(songSagaCreate)
saga.run(songSagaDelete)
saga.run(songSagaEdit)