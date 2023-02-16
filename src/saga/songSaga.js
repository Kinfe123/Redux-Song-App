import  { all , put , takeEvery , call, takeLatest} from 'redux-saga/effects'
import { getFetchedSuccessSong , addSong , removeSong , editSong  } from '../features/songs/songSlice'

import { CREATE_SONG , DELETE_SONG_BY_ID , UPDATE_SONG_BY_ID } from '../features/types'
// this is for fetching songs 
const baseURL = 'http://localhost:3002/songs/'

function* workSongFetch() {

    const songs = yield call(()=>fetch(baseURL))

    const jsonData = yield songs.json()

    yield put(getFetchedSuccessSong(jsonData))
}




// this is for creating new song
function* workSongCreate(actions) {

   
      yield call(()=>fetch(baseURL , {
        method: "POST",
     
        // Adding body or contents to send
        body: JSON.stringify({
            id: actions.payload.id,
            artist: actions.payload.artist,
            title: actions.payload.title,
        
           
            img: actions.payload.img,
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      }
    ))
   
    yield put(addSong(actions.payload))
    
    
   
    
}





//this is for deleteing the songs
function* workSongDelete(actions) {

   
    yield call(() => fetch(baseURL + actions.payload , {
        method:'DELETE'
    }))
    yield put(removeSong(actions.payload))


  
}

// this is for editing the song 
function* workSongEdit(actions) {
    
    
    yield call(() => fetch(baseURL+actions.payload.id  , {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        // Adding body or contents to send
        body: JSON.stringify(actions.payload),
         
    
        
      }
    ))


    yield put(editSong(actions.payload))

}



export function* songSaga() {
    yield takeLatest(UPDATE_SONG_BY_ID , workSongEdit)
    yield takeEvery(DELETE_SONG_BY_ID , workSongDelete)
    yield takeEvery('songs/getFetchedSong' , workSongFetch)
    yield takeEvery(CREATE_SONG , workSongCreate)

}
