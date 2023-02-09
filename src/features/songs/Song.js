import { useSelector , useDispatch } from "react-redux"
import SongItem from "../../components/SongItem"
import SongItems from "../../components/SongItems"



const Song = () => {

    const {songs} = useSelector(state => state.song)

    return (
        <div className="songs">
            <h1>List of Available Songs.</h1>

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