import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSong, getSongById } from '../api'
import { GET_SONG_BY_ID } from '../features/types'
import { useDispatch , useSelector } from 'react-redux'

function SongDetail() {
 const [result , setResult ] = useState([])
 const [loading , setLoading ] = useState('idle')
 const dispatch = useDispatch()


 const {id} = useParams()


 

 
 useEffect(()=> {
     setLoading('loading')




     dispatch({type:GET_SONG_BY_ID , payload:id})
    
   
     
    //  try {
    //     const res = getSongById(id)
    //     console.log(res.data)
    //     setResult(res.data)
    //     if(res.data){
    //         setLoading('resolved')

    //     }else {
    //         setLoading('not resolved')
    //     }

    //  }catch(err){
    //      setResult(null)
    //      setLoading('error')

        

    //  }
     
     

 } , [dispatch])
        const error = useSelector(state => state.song.isError)
        const results = useSelector(state => state.song.indSong)
        if(error === 'not-occurred'){
            console.log(results)
         }else {
             console.log('REally occured on frintec ')
         }
        



  return (
    <div>
        {result !== null && (error === 'not-occurred') ? (
            <div>
                {[results].map((res)=>{
                    return (
                        <div className='whole-stuff'>
                            <div className='img-with-text'>
                            <img src={res.img} />
                            <div className='artists-desc'>
                                <h2>🧑‍🎤 Artists : <span className='spanned'>{res.artist}</span></h2>
                                <h2>🎶 Title : <span className="spanned">{res.title}</span></h2>
                            </div>
                            </div>
                           

                        </div>
                    )
                })}

            </div>
        ): (<div>

            <h1>No such user with id: {id}</h1>


        </div>)}
    
    </div>
  )
}

export default SongDetail