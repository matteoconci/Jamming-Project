import React, { useState } from 'react';
import Playlist from '../Playlist/playlist.jsx';
import SearchBar from '../SearchBar/searchBar.jsx';
import Tracklist from '../Tracklist/tracklist.jsx';
import './App.css';

const playlistObj = {
  name: 'My Playlist',
  tracks: [
    {
      name: 'Nightside',
      artist: 'Almost Vanished',
      album: 'Cold Senses',
      id: 1
    },
    {
      name: 'Foresight',
      artist: 'Myst',
      album: 'Naturesque',
      id: 2
    }  
  ]
};

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState(playlistObj);

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
  };

  return (
    <>
      <div className='search'>
        <SearchBar  
          search={search} 
          setSearch={setSearch} 
          handleSearch={handleSearch}
        />
        <Tracklist tracks={searchResults}/>
      </div>
      <div className='playlist'>
        <Playlist 
          playlistName={playlist.name}
          tracks={playlist.tracks}
        />
      </div>
    </>
  );
};

export default App
