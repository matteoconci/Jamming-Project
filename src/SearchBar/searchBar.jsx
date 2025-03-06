import React from "react";
import styles from './searchBar.module.css';

function SearchBar({search, setSearch, handleSearch}) {
    return (
        <div className={styles.input}>
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a song..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;