import React, { useState } from 'react'
import './App.css'
import Playlist from '../Playlist/playlist.jsx';
import Tracklist from '../Tracklist/tracklist.jsx';
import SearchBar from '../SearchBar/searchBar.jsx';


function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch() {
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
      }
    ];
    setSearchResults(songArray);
  }

  return (
    <>
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        handleSearch={handleSearch}
      />
      <Tracklist tracks={searchResults}/>
      <div >
        <button >
          Save to Spotify
        </button>
      </div>
      
    </>
  )
}

export default App
