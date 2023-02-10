import {put , takeEvery , call} from 'redux-saga/effects'
import { getFetchedSuccessSong } from '../features/songs/songSlice'


function* workSongFetch() {
   
    const songs = yield call(()=>fetch('http://localhost:3001/songs'))
    const jsonData = yield songs.json()
    
    yield put(getFetchedSuccessSong(jsonData))
}


function* songSaga() {
    yield takeEvery('songs/getFetchedSong' , workSongFetch)
}

export default songSaga;