import  { all , fork , put , takeEvery , call} from 'redux-saga/effects'
import { getFetchedSuccessSong , editFetchedSong , editSong, createFetchedSong, deleteFetchedSong  } from '../features/songs/songSlice'

// this is for fetching songs 
function* workSongFetch() {
   
    const songs = yield call(()=>fetch('http://localhost:3002/songs'))
    const jsonData = yield songs.json()
    console.log(jsonData)
    yield put(getFetchedSuccessSong(jsonData))
}

export  function* songSaga() {
    yield takeEvery('songs/getFetchedSong' , workSongFetch)
}


// this is for creating new song
function* workSongCreate(actions) {
    const songsForAdd = yield call(()=>fetch('http://localhost:3002/songs'  , {
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
    // const jsonData = yield songsForAdd.json()
    // console.log(jsonData)
    // yield put(createFetchedSong(jsonData))
    
   
    
}




export function* songSagaCreate() {
    yield takeEvery('songs/createFetchedSong' , workSongCreate)
}
//this is for deleteing the songs
function* workSongDelete(actions) {

   console.log(actions)
    const deleteSong = yield call(()=> fetch('http://localhost:3002/songs/' + actions.payload , {
        method:"DELETE"
    }) )

    // yield put(deleteFetchedSong())

    // yield put(deleteFetchedSong(id))
}
export function* songSagaDelete() {
    yield takeEvery('songs/deleteFetchedSong' , workSongDelete)
}
// this is for editing the song 
function* workSongEdit(actions) {
    
   
    const songForEdit = yield call(()=>fetch('http://localhost:3002/songs/' + actions.payload.id , {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        // Adding body or contents to send
        body: JSON.stringify({
            id: actions.payload.id,
            artist: actions.payload.artist,
            title: actions.payload.title,
        
           
            img: actions.payload.img,
        }),
         
        // Adding headers to the request
        
      }
    ))

    
    // const jsonData = yield songForEdit.json()
    
    // console.log(jsonData)
    // yield put(editFetchedSong(jsonData))
}
export function* songSagaEdit() {
    yield takeEvery('songs/editFetchedSong' , workSongEdit)
}
