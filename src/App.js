import React, { useEffect } from 'react';


import { BrowserRouter , Route , Router , Routes } from 'react-router-dom';

import Song from './features/songs/Song';
import './App.css';
import Navbar from './components/Navbar';
import CreateSong from './pages/CreateSong';
import EditSong from './pages/EditSongs';
import createSagaMiddleware from '@redux-saga/core';
import { HashLoader } from 'react-spinners';
import { useSelector } from 'react-redux';



function App() {

 
  

  
  return (
    <div className="App">
      

     <BrowserRouter>
     <Navbar />

     
      <Routes>
        <Route path="/" element={<Song />} />
        {/* <Route path='/*' element={<NotFound />}/> */}
        <Route path="/create" element={<CreateSong />} />
        <Route path="/edit/:id" element={<EditSong />} />
        {/* <Route path="/:id" element={<Update />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
 
      </Routes>
    </BrowserRouter>
      {/* <Routes>
      <Route path="/" element={<Song />} />

      <Route path='/create' element={<CreateSong />} />
      </Routes> */}


    
      
     
    </div>
  );
}

export default App;
