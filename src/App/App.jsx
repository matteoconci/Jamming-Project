import React, { useEffect, useState } from 'react';
import Playlist from '../Playlist/playlist.jsx';
import SearchBar from '../SearchBar/searchBar.jsx';
import Tracklist from '../Tracklist/tracklist.jsx';
import './App.css';

const playlistObj = {
  tracks: []
};

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState(playlistObj);
  const [hasSearched, setHasSearched] = useState(false);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [newPlaylistName, setNewPlaylistName] = useState(playlistName)

  function handleSearch(search) {
    const songArray = [
      {
          name: 'Endure',
          artist: 'David A. Molina',
          album: 'Genesis',
          id: 1,
          uri: 'spotify:track:2AsthUAUp5KmDplPZjOHjP'
      },
      {
          name: 'Coma',
          artist: 'Etsu',
          album: 'Nightwalk',
          id: 2,
          uri: 'spotify:track:0VwA9VeEQmwzEmUvZ1SkEs'
      },
      {
        name: 'Nightside',
        artist: 'Almost Vanished',
        album: 'Cold Senses',
        id: 3,
        uri: 'spotify:track:08dF4RdsGGLCbN3WoRAabU'
      },
      {
        name: 'Foresight',
        artist: 'Myst',
        album: 'Naturesque',
        id: 4,
        uri: 'spotify:track:69QrugD4h6rRXLgR8FBIVr'
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
      setPlaylist({tracks: [...playlist.tracks, trackToAdd] });
    };
  };

  function handleRemove(trackId) {
    if(playlist.tracks.some(track => track.id === trackId) ) {
      const newTracks = playlist.tracks.filter(track => track.id !== trackId);
      setPlaylist({tracks: newTracks });
    };
  };

  function handleRename() {
    setPlaylistName(newPlaylistName);
  }

  function handleSave() {
    const uriArray = playlist.tracks.map(track => track.uri);
    if(uriArray.length === 0) return;
    setPlaylist(playlistObj);
    alert('Playlist saved to Spotify');
  }

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
          playlist={playlist}
          playlistName={playlistName}
          newPlaylistName={newPlaylistName}
          setNewPlaylistName={setNewPlaylistName}
          tracks={playlist.tracks}
          handleRemove={handleRemove}
          handleRename={handleRename}
          handleSave={handleSave}
        />
      </div>
    </>
  );
};

export default App;