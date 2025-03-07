import React from "react";
import styles from './playlist.module.css';
import Track from '../Track/track.jsx';

function Playlist({playlist, playlistName, NewPlaylistName, setNewPlaylistName, tracks, handleRemove, handleRename, handleSave}) {
    
    return (
        <div className={styles.playlist}>
            <div className={styles.playlistName}>
                <input 
                    className={styles.input}
                    type="text"
                    value={NewPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    placeholder="My Playlist"
                />
                <button onClick={handleRename}>Save</button>
            </div>
            <div className={styles.tracklist}>
                <h2>{playlistName}</h2>
                {tracks.map((track) => (
                            <div key={track.id} className={styles.track}>
                                <Track track={track} />
                                <button className={styles.li} onClick={() => handleRemove(track.id)}>
                                    -
                                </button>
                            </div>
                        ))}
                {playlist.tracks.length > 0 ? <button onClick={handleSave}>Save Playlist to Spotify</button> : null}
            </div>           
        </div>
    );
}

export default Playlist;