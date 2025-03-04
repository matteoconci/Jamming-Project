# Jamming Project

This repository is a project using react to create an app with the Spotify API.
The feature of the app are:
-Ability to search song;
-Create new playlist;
-Adding your searched song or your new playlist to your Spotify account.

## Expanding the process of creating the React App

Below you can find every task that I have done to create my App. 

1. Create base framework with Vite;
   Terminal
    ```
   npm create vite@latest
    
2. Delete base default Vite script to have a clean starting point;
3. Create components folder with jsx and module.css file;
4. Create first function in component to see if there are any error:
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

7.



