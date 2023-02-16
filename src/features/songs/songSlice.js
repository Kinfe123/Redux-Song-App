import { createSlice } from "@reduxjs/toolkit";
import songItems from "../../songItems";
import {current} from '@reduxjs/toolkit'

const initialState = {
    songs:[],
    isLoading: false,
    quantity:songItems.length,
    editSong:[]
}
const songSlice = createSlice({
    name:"songs",
    initialState,
    reducers: {


        // the following code become optional since we used an API 

        getSongs: (state , action)=> {
            
            const songById = state.songs.filter(s => s.id === action.payload)
            
        },
        // addSongs: (state , action) => {
        //     state.songs.push(action.payload);
        // },
        removeSong: (state , action) => {
           
            state.songs = state.songs.filter(song => song.id !== action.payload)
        },
        getSong:(state , action)=> {
            const getSongById = current(state).songs.filter(s => s.id === action.payload)
            state.editSong = getSongById

            

        },
        editSong: (state , action)=> {
           const idForEdit = action.payload.id

       
           const result = current(state).songs.filter(s => s.id === idForEdit)
 
           const indexOf = current(state).songs.indexOf(result[0])
           state.songs[indexOf] = action.payload
           return state 
        
       
        },
        addSong: (state, action)=> {
            state.songs.push(action.payload)
            return state
        },






        // this is for saga and async part of the code 
        getFetchedSong: (state , action) => {
            state.isLoading = true
            
        },
        getFetchedSuccessSong: (state , action) => {
           
            state.songs = action.payload
            
            state.isLoading = false 
           

        },
       
    


        
       

        
       
    }
})



export const {  getSongs , addSong , removeSong , getSong , editSong , getFetchedSong , getFetchedSuccessSong , getFetchedSongFailure} = songSlice.actions
export default songSlice.reducer