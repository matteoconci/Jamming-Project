import React from "react";
import styles from './tracklist.module.css';
import Track from '../Track/track.jsx';


function Tracklist({tracks, hasSearched, handleAdd}) {
    const resultsList = () => {
        if(tracks.length > 0) {
            return (
                <div className={styles.tracklist}>
                    {tracks.map((track) => (
                        <div key={track.id} className={styles.track}>
                            <Track track={track} />
                            <button className={styles.li} onClick={() => handleAdd(track.id)}>
                                Add to Playlist
                            </button>
                        </div>
                    ))}
                </div>
                );
        } else if(hasSearched && tracks.length === 0) {
            return <p>No results found</p>;
        };
    };
    return  (
        <div>
            {resultsList()}
        </div>    
    );
};

export default Tracklist;