import { useState } from "react"
import { CREATE_SONG } from "../features/types"
import {useSelector  , useDispatch} from 'react-redux'
import { addSong, createFetchedSong } from "../features/songs/songSlice"
import { useNavigate } from "react-router-dom"

const CreateSong = () => {

    const dispatch = useDispatch()
    
   const navigate = useNavigate()

    const [artist,setArtist] = useState('')
    const [poster , setPoster] = useState('')
    const [title ,setTitle] = useState('')
   
    const handleSubmit = (e) => {
        var time = Date.now() 
   
        time = time.toString()
        // console.log(time)
        e.preventDefault()
        // dispatch(addSongs({
        //     id:time,
        //     artist:artist,
        //     title:title,
        //     img:poster, 
        // }))
        const payloadObject = {
          id:time,
          artist:artist,
          title:title,
          img:poster, 

        }
      dispatch({type:CREATE_SONG , payload:payloadObject})

        // dispatch(addSong({
        //       id:time,
        //       artist:artist,
        //       title:title,
        //       img:poster, 
        //   }))
      navigate('/')
        
    }
    return (
        <div className="create-new-one">
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

        <button>Create This Song</button>
        </div>

        </form>
    </div>
    </div>

    )
}

export default CreateSong