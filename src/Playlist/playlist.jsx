import React from "react";
import styles from './playlist.module.css';
import Tracklist from '../Tracklist/tracklist.jsx';

function Playlist({playlistName, tracks}) {
    return (
        <div>
            <h2>{playlistName}</h2>
            <Tracklist tracks={tracks}/>
        </div>
    );
}

export default Playlist;