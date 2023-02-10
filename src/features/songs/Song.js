import { useSelector , useDispatch } from "react-redux"
import SongItem from "../../components/SongItem"
import SongItems from "../../components/SongItems"
import { useEffect } from "react"
import { getFetchedSong } from "./songSlice"
import HashLoader from "react-spinners/HashLoader"



const Song = () => {

    const dispatch = useDispatch()
    // const isLoading = useSelector(state => state.song.isLoading);


  


    useEffect(()=> {
        dispatch(getFetchedSong())

    } , [dispatch])

    const {songs , isLoading} = useSelector(state => state.song)
  
     
    return (
        <div className="songs">
            <h1>List of Available Songs.</h1>
            <div className='loader'>
            {isLoading && (<HashLoader color="#7d50ce" />)}
            </div>
            <div className="av-songs">
                {songs.map((song)=> {
                    return (
                        <div className="songsforgrid">
                        {/* <SongItem key={song.id} {...song}/> */}
                        <SongItems key={song.id} {...song}/>
                    
                        </div>
                    )
                })}


            </div>



        </div>
    )
}
export default Song