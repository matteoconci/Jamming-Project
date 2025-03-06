import React from "react";
import styles from './tracklist.module.css';


function Tracklist({tracks}) {
    const resultsList = () => {
        if(tracks.length > 0) {
            return tracks.map((track) => (
                <div key={track.id}>
                    <h3>{track.name}</h3>
                    <p>{track.artist}</p>
                    <p>{track.album}</p>
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