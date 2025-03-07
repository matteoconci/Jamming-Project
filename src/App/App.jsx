import React, { useEffect, useState } from 'react';
import Playlist from '../Playlist/playlist.jsx';
import SearchBar from '../SearchBar/searchBar.jsx';
import Tracklist from '../Tracklist/tracklist.jsx';
import './App.css';
import Spotify from '../spotify.js';


const playlistObj = {
  tracks: []
};

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState(playlistObj);
  const [hasSearched, setHasSearched] = useState(false);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [newPlaylistName, setNewPlaylistName] = useState(playlistName);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Spotify.getAccessToken();
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  async function handleSearch(searchInput) {
    const trimSearch = searchInput.trim();
    if (!trimSearch) {
      setSearchResults([]);
      setHasSearched(true);
      return;
    }
    try {
      // Facciamo la ricerca su Spotify
      const results = await Spotify.search(trimSearch);
      setSearchResults(results);
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
      setSearchResults([]);
    }
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