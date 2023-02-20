import axios from 'axios'


// defining the base url for our api that we are gonna fetch from 
axios.defaults.baseURL = 'http://localhost:3002'


export const getSong = async  () =>  await axios.get('/songs')


export const getSongById  = async (id) => axios.get(`/songs/${id}`)

export const createSongById = async (song) => axios.post(`/songs`, song)

export const updateSongById = async (song) => axios.put(`/songs/${song.id}`, song)

export const deleteSongById = async (id) => axios.delete(`/songs/${id}`)







