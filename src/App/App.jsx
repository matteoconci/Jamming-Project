import React, { useEffect, useState } from 'react';
import Playlist from '../Playlist/playlist.jsx';
import SearchBar from '../SearchBar/searchBar.jsx';
import Tracklist from '../Tracklist/tracklist.jsx';
import './App.css';

const playlistObj = {
  name: 'My Playlist',
  tracks: []
};

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState(playlistObj);
  const [hasSearched, setHasSearched] = useState(false);
  const [playlistName, setPlaylistName] = useState(playlist.name);

  function handleSearch(search) {
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
        name: 'Nightside',
        artist: 'Almost Vanished',
        album: 'Cold Senses',
        id: 3
      },
      {
        name: 'Foresight',
        artist: 'Myst',
        album: 'Naturesque',
        id: 4
      }
    ];

    const trimSearch = search.trim();

    if(!search.trim()) {
      setSearchResults([]);
    } else {
      const filteredSongs =
      songArray.filter((song) => song.name.toLowerCase().includes(trimSearch.toLowerCase()));
      setSearchResults(filteredSongs);
    };
    setHasSearched(true);
  };

  function handleAdd(trackId) {
    if(!playlist.tracks.some(track => track.id === trackId) ) {
      const trackToAdd = searchResults.find(track => track.id === trackId);
      if(!trackToAdd) return;
      setPlaylist({ ...playlist, tracks: [...playlist.tracks, trackToAdd] });
    };
  };

  function handleRemove(trackId) {
    if(playlist.tracks.some(track => track.id === trackId) ) {
      const newTracks = playlist.tracks.filter(track => track.id !== trackId);
      setPlaylist({ ...playlist, tracks: newTracks });
    };
  };

  return (
    <>
      <div className='search'>
        <SearchBar  
          search={search} 
          setSearch={setSearch} 
          handleSearch={() => handleSearch(search)}
        />
        <Tracklist 
        tracks={searchResults}
        hasSearched={hasSearched}
        handleAdd={handleAdd}
        />
      </div>

      <div className='playlist'>
        <Playlist 
          playlistName={playlist.name}
          tracks={playlist.tracks}
          handleRemove={handleRemove}
        />
      </div>
    </>
  );
};

export default App
