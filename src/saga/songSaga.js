import  { all , put , takeEvery , call, takeLatest} from 'redux-saga/effects'
import {fetchUserById,  getFetchedSuccessSong , addSong , removeSong , editSong, getSongByIds, getErrorFlag  } from '../features/songs/songSlice'
import { getSongById ,  createSongById, deleteSongById, getSong, updateSongById } from '../api'
import{GET_SONG_BY_ID,  CREATE_SONG , DELETE_SONG_BY_ID , UPDATE_SONG_BY_ID } from '../features/types'
// this is for fetching songs 
const baseURL = 'http://localhost:3002/songs/'

function* workSongFetch() {

    const songs = yield call(getSong)
    
    const jsonData = yield songs.data

    yield put(getFetchedSuccessSong(jsonData))
}




// this is for creating new song
function* workSongCreate(actions) {

   
    yield call(createSongById , actions.payload)
   
    yield put(addSong(actions.payload))
    
    
   
    
}





//this is for deleteing the songs
function* workSongDelete(actions) {

   
    
    yield call(deleteSongById , actions.payload)
    yield put(removeSong(actions.payload))


  
}

// this is for editing the song 
function* workSongEdit(actions) {
    
    

    yield call(updateSongById , actions.payload)

    yield put(editSong(actions.payload))

}

function* workGetSongs(actions){
    try {
        const result = yield call(getSongById , actions.payload)
        const resultData = yield result.data

        yield put(getSongByIds(resultData))
    }catch(err){
        yield put(getErrorFlag('occurred'))

    }
    // console.log('This is resultdata: ' , result)
}


export function* songSaga() {
    yield takeLatest(UPDATE_SONG_BY_ID , workSongEdit)
    yield takeLatest(DELETE_SONG_BY_ID , workSongDelete)
    yield takeEvery('songs/getFetchedSong' , workSongFetch)
    yield takeEvery(CREATE_SONG , workSongCreate)
    yield takeEvery(GET_SONG_BY_ID , workGetSongs)

}
