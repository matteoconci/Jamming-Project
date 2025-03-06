import React from "react";
import styles from './track.module.css';

function Track({track}) {
    if (!track) return null;
    return (
        <div className={styles.track}>
            <h3 className={styles.li}>{track.name}</h3>
            <p className={styles.li}>{track.artist}</p>
            <p className={styles.li}>{track.album}</p>
        </div>
    );
};


export default Track;