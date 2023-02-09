import './songs.css'
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeSong } from '../features/songs/songSlice'
const SongItems = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleRemove = () => {
        

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
            <h2 class="title">{props.title}</h2>
            <author class="artist">{props.artist}</author>
            <div className='btns-spaced'>
                <button className="editBtn" onClick={handleEdit}>Edit</button>
                <button className='editBtnRev' onClick={()=>dispatch(removeSong(props.id))}>Remove</button>
            </div>
        </div>
        </div>

        
        </>
    )
}
export default SongItems