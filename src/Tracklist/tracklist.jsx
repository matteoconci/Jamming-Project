import React from "react";
import styles from './tracklist.module.css';


function Tracklist({tracks}) {
    const resultsList = () => {
        if(tracks.length > 0) {
            return tracks.map((track) => (
                <div key={track.id} className={styles.track}>
                    <h3 className={styles.li}>{track.name}</h3>
                    <p className={styles.li}>{track.artist}</p>
                    <p className={styles.li}>{track.album}</p>
                    <button className={styles.li}>Add to Playlist</button>
                </div>
                )
            );
        } else {
            return (
                <div>
                    <p>No results found</p>
                </div>
            );
        };
    };
    return  (
        <div>
            {resultsList()}
        </div>    
    );
};

export default Tracklist;