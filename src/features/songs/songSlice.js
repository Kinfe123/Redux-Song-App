import { createSlice } from "@reduxjs/toolkit";
import songItems from "../../songItems";
import {current} from '@reduxjs/toolkit'

const initialState = {
    songs:songItems,
    isLoading: false,
    quantity:songItems.length,
    editSong:[]
}
const songSlice = createSlice({
    name:"songs",
    initialState,
    reducers: {
        getSongs: (state , action)=> {
            
            const songById = state.songs.filter(s => s.id === action.payload)
            
        },
        addSongs: (state , action) => {
            state.songs.push(action.payload);
        },
        removeSong: (state , action) => {
            console.log(action)
            state.songs = state.songs.filter(song => song.id !== action.payload)
        },
        getSong:(state , action)=> {
            const getSongById = current(state).songs.filter(s => s.id === action.payload)
            state.editSong = getSongById

            

        },
        editSong: (state , action)=> {
           const idForEdit = action.payload.id

       
           const result = current(state).songs.filter(s => s.id === idForEdit)
           console.log(result)
           const indexOf = current(state).songs.indexOf(result[0])
           state.songs[indexOf] = action.payload
        //    current(state).songs.forEach((s)=> {
        //        if(s.id === idForEdit){
        //            s.artist = action.payload.artist
        //            s.title = action.payload.title
        //            s.img = action.payload.img
                   
        //        } 
        //    })
        
        
       
        }

        
       

        
       
    }
})



export const {getSongs , addSongs , removeSong , getSong , editSong} = songSlice.actions
export default songSlice.reducer