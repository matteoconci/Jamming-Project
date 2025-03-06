# Jamming Project

This repository is a project using react to create an app with the Spotify API.
The feature of the app are:
- Ability to search song;
- Create new playlist;
- Adding your searched song or your new playlist to your Spotify account.

## Expanding the process of creating the React App

Below you can find every task that I have done to create my App. 

> [!WARNING]  
> *The code below represent the first scripting of the file, I wrote it down step by step as I did it, so it might have been modified over time and can have some incongruence.* 

1. Create base framework with Vite;
   Terminal
    ```
   npm create vite@latest
    
2. Delete base default Vite script to have a clean starting point;
3. Add components folder with jsx and module.css file;
4. Add first function in component to see if there are any error:
    Component javascript file
    ```
    import React from "react";
    import styles from './playlist.module.css';

    function Playlist() {
        return  <h2 className={styles.playlist}>Playlist</h2>;
    
    }

    export default Playlist;

5. On App return the first component:
    App javascript file
    ```
    function App() {
        return (
            <>
                <Playlist />
            </>
        )
    }
    export default App
    
6. Check on local host if the first component is rendered:
    Terminal
    ```
    npm run dev

7. Add a manual object of song to test the React flow
8. Add the first component code in tracklist:
   1. This component will receive an object of song to render to the console;
   2. Add an if statement to check if the object is > 0, if true it will return an array of the song with .map()
        ```
        const resultsList = () => {
            if(tracks.length > 0) {
                return tracks.map((track) => (
                    <div key={track.id}>
                        <h3>{track.name}</h3>
                        <p>{track.artist}</p>
                        <p>{track.album}</p>
                    </div>
                ));
            }
        } else {
            return <p>No result found</p>;
        }
           
    3. We need to include the array in the return of the component the send it to the App.jsx
        ```
        <div>
            {resultsList()}
        </div>
9.  Render the component and add a props to send to it the object of songs
    ```
    <Tracklist tracks={searchResults}/>
10. Add the useState to handle the searchBar input and to add the searchResult to send to the tracklist component
    ```
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
11. Add the handleSearch function that will start when the button isClick with the recall to SetSearchResults
    ```
    function handleSearch() {
        const songArray = [
            {
                name: 'Endure',
                artist: 'David A. Molina',
                album: 'Genesis',
                id: 1
            },
            {
                name: 'Coma',
                artist: 'Etsu',
                album: 'Nightwalk',
                id: 2
            }
        ];
        setSearchResults(songArray);
    }
12. Add the base code for the searchBar component with the input and button jsx that will pass the input to the props
    ```
    function SearchBar({search, setSearch, handleSearch}) {
        return (
            <div>
                <input 
                    type="text"
                    value={search}
                    onChange={(e) => 
                        setSearch(e.target.value)}
                    placeholder="Search for a song..."
                />
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>
        );
    }
13. Render the searchBar component and link to it the props of the useState and function
    ```
    <SearchBar 
        search={search} 
        setSearch={setSearch} 
        handleSearch={handleSearch}
    />
14. Add base code for the playlist component with the only role of render the playlist received from App. For semplification we recall the tracklist component to render the track 
    ```
    function Playlist({playlistName, tracks}) {
    return (
        <div>
            <h2>{playlistName}</h2>
            <Tracklist tracks={tracks}/>
        </div>
    );
    }
15. Add the base code to render the playlist in App and an example playlist for testing
    ```
    <Playlist 
        playlistName={playlistObj.name}
        tracks={playlistObj.tracks}
    />
16.



