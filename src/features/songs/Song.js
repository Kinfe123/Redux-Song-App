import { useSelector , useDispatch } from "react-redux"
import SongItem from "../../components/SongItem"



const Song = () => {

    const {songs} = useSelector(state => state.song)

    return (
        <div className="songs">
            <h1>List of Available Songs.</h1>

            <div className="av-songs">
                {songs.map((song)=> {
                    return (
                        <SongItem key={song.id} {...song}/>
                    )
                })}


            </div>



        </div>
    )
}
export default Song