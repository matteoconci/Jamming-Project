import React, { useState } from 'react'
import './App.css'
import Playlist from '../Playlist/playlist.jsx';
import Tracklist from '../Tracklist/tracklist.jsx';

const songArray = [
  {
      name: 'Endure',
      artist: 'David A. Molina',
      album: 'Genesis',
      id: 1
  },
  {
      name: 'Coma',
      artist: 'Etsu',
      album: 'Nightwalk',
      id: 2
  },
  {
      name: 'The Great Gig in the Sky',
      artist: 'Pink Floyd',
      album: 'The Dark Side of the Moon',
      id: 3
  },
  {
      name: 'Atrid',
      artist: 'VonnBoyd',
      album: 'Desperation',
      id: 4
  },
  {
      name: 'Serenity',
      artist: 'The Pitcher',
      album: 'Serenity/Our Core',
      id: 5
  },
  {
      name: 'Snow Flakes',
      artist: 'Blackbird',
      album: 'Lonely Bird',
      id: 6
  }
];

function App() {

  return (
    <>
      <Playlist />
      <div>
        <input type="text" />
        <button>
          Search
        </button>
      </div>
      <Tracklist tracks={songArray}/>
      <div >
        <button >
          Save to Spotify
        </button>
      </div>
      
    </>
  )
}

export default App
