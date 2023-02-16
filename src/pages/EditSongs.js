import { useState , useEffect } from "react"

import {useSelector  , useDispatch } from 'react-redux'
import {  getSong } from "../features/songs/songSlice"
import { Navigate, useNavigate  , useParams } from "react-router-dom"
import { current } from "@reduxjs/toolkit"
import { UPDATE_SONG_BY_ID } from "../features/types"

const EditSong = () => {
  const dispatch = useDispatch()




    useEffect(()=> {
      dispatch(getSong(id))
    

  } , [dispatch])
    const {id} = useParams()
  
    const result = useSelector(state => state.song)

    const resultById = result.songs.filter(x => x.id === id)

    
    
    const [edit , setEdit ] = useState({})
  
    const [artist,setArtist] = useState(resultById[0].artist)
   
    const [poster , setPoster] = useState(resultById[0].img)
    const [title ,setTitle] = useState(resultById[0].title)
    const navigate = useNavigate()

    
    const handleSubmit = (e) => {
        // var time = Date.now() 
     
        e.preventDefault()
        const payloadObject = {
          id:id,
          artist:artist,
          title:title,
          img:poster, 
        }
        dispatch({type: UPDATE_SONG_BY_ID , payload:payloadObject})
        navigate('/')
      
        
    }
    return (
        <div className="create-new-one">
            <h3>Editing an Artist</h3>
          <div className="page create">
            
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name Of The Artist</label>
        <input 
          type="text" 

          
          id="title"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
          <label htmlFor="title">Title</label>
        <input 
          type="text" 
 
          
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Paste the poster url</label>
        <textarea 
          id="method"
          maxLength={200}
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />

        <div className="together">

        <button>Save This Song</button>
        </div>

        </form>
    </div>
    </div>

    )
}

export default EditSong 