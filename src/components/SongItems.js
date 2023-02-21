import './songs.css'
import {useDispatch } from 'react-redux'
import { DELETE_SONG_BY_ID } from '../features/types'
import { Link, useNavigate } from 'react-router-dom'
import { removeSong , deleteFetchedSong } from '../features/songs/songSlice'
const SongItems = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleRemove = () => {
        dispatch({type:DELETE_SONG_BY_ID , payload:props.id})
        

    }
    const handleEdit = () => {
        navigate('/edit/' + props.id)

    }
    const handleClick = () => {
        navigate('/songs/' + props.id)
    }
    const url = '/songs/'+props.id
    return (
        <>
        <div class="music-card">
        <div class="image">
            <img src={props.img} height={374}/>
        </div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <a href={url}>
        <div class="info">
            <h2 class="title">♫  {props.title}</h2>
            <author class="artist">🎸 {props.artist}</author>
            <div className='btns-spaced'>
                <button className="editBtn" onClick={handleEdit}>Edit</button>
                <button className='editBtnRev' onClick={handleRemove}>Remove</button>
            </div>
        </div>
        </a>
        </div>

        
        </>
    )
}
export default SongItems