import React, { useState } from 'react'
import './App.css'
import Playlist from '../Playlist/playlist.jsx';
import Tracklist from '../Tracklist/tracklist.jsx';


function App() {

  return (
    <>
      <Playlist />
      <Tracklist />
      <div>
        <button>
          Search
        </button>
      </div>
      <div >
        <button >
          Save to Spotify
        </button>
      </div>
      
    </>
  )
}

export default App
