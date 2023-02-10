import './songs.css'
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeSong , deleteFetchedSong } from '../features/songs/songSlice'
const SongItems = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleRemove = () => {
        dispatch(deleteFetchedSong(props.id))
        

    }
    const handleEdit = () => {
        navigate('/edit/' + props.id)

    }
    return (
        <>
        <div class="music-card">
        <div class="image">
            <img src={props.img}/>
        </div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="info">
            <h2 class="title">♫  {props.title}</h2>
            <author class="artist">🎸 {props.artist}</author>
            <div className='btns-spaced'>
                <button className="editBtn" onClick={handleEdit}>Edit</button>
                <button className='editBtnRev' onClick={handleRemove}>Remove</button>
            </div>
        </div>
        </div>

        
        </>
    )
}
export default SongItems