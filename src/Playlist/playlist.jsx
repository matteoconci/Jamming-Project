import React from "react";
import styles from './playlist.module.css';
import Track from '../Track/track.jsx';

function Playlist({playlistName, tracks, handleRemove}) {
    return (
        <div className={styles.playlist}>
            <input 
                className={styles.input}
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="My Playlist"
            />
            <div className={styles.tracklist}>
                {tracks.map((track) => (
                            <div key={track.id} className={styles.track}>
                                <Track track={track} />
                                <button className={styles.li} onClick={() => handleRemove(track.id)}>
                                    Remove from Playlist
                                </button>
                            </div>
                        ))}
            </div>           
        </div>
    );
}

export default Playlist;