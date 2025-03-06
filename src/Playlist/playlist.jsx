import React from "react";
import styles from './playlist.module.css';
import Track from '../Track/track.jsx';

function Playlist({playlistName, tracks}) {
    return (
        <div className={styles.playlist}>
            <h2>{playlistName}</h2>
            {tracks.map((track) => (
                        <div key={track.id} className={styles.track}>
                            <Track track={track} />
                        </div>
                    ))}
            <Track tracks={tracks}/>
        </div>
    );
}

export default Playlist;