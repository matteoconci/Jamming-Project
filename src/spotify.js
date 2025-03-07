const clientId = "1ca1bbd85bed4b8e85101451b267a803";  // Sostituiscilo con il Client ID della tua app Spotify
const redirectUri = window.location.hostname === "localhost"// Deve essere lo stesso registrato su Spotify Developer
  ? "http://localhost:5173/"  // 🌍 In locale (dev)
  : "https://matteoconci.github.io/Jamming-Project/";  // 🌐 In produzione
const authEndpoint = "https://accounts.spotify.com/authorize";
const scopes = ["playlist-modify-public", "playlist-modify-private"];  // Permessi richiesti


let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken; // Se il token è già in memoria, usalo direttamente
    }

    // Controlla se il token esiste già in localStorage
    const storedToken = localStorage.getItem("spotify_access_token");
    const expirationTime = localStorage.getItem("spotify_token_expiration");

    const now = new Date().getTime(); // Tempo attuale in millisecondi

    if (storedToken && expirationTime > now) {
      accessToken = storedToken;
      return accessToken;
    }

    // Se non c'è un token valido, controlliamo l'URL per vedere se è stato restituito da Spotify
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const token = urlParams.get("access_token");
    const expiresIn = urlParams.get("expires_in");

    if (token) {
      accessToken = token;
      const expirationTimestamp = now + expiresIn * 1000;

      // Salviamo il token e la scadenza in localStorage
      localStorage.setItem("spotify_access_token", accessToken);
      localStorage.setItem("spotify_token_expiration", expirationTimestamp);

      // Puliamo l'URL per evitare problemi di refresh
      window.history.pushState({}, null, "/");

      return accessToken;
    } else {
      // Se non c'è un token, reindirizza l'utente alla pagina di autenticazione Spotify
      const authUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}`;
      window.location = authUrl;
    }
  },

  logout() {
    // Rimuove il token salvato e reindirizza per ottenere un nuovo accesso
    accessToken = null;
    localStorage.removeItem("spotify_access_token");
    localStorage.removeItem("spotify_token_expiration");
    window.location.reload(); // Ricarica l'app
  },

  async search(term) {
    const token = Spotify.getAccessToken();
    const url = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const jsonResponse = await response.json();
      if (!jsonResponse.tracks) {
        return [];
      }

      return jsonResponse.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    } catch (error) {
      console.error("Errore nella ricerca Spotify:", error);
      return [];
    }
  },

  async savePlaylist(playlistName, trackUris) {
    // 1) Controlli iniziali
    if (!playlistName || !trackUris.length) return;

    // 2) Token e header
    const token = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      // 3) Ottieni l'ID utente
      const responseMe = await fetch("https://api.spotify.com/v1/me", {
        headers: headers
      });
      const jsonMe = await responseMe.json();
      const userId = jsonMe.id;

      // 4) Crea una nuova playlist
      const responsePlaylist = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            name: playlistName,
            description: "Created with Jammming!",
          }),
        }
      );
      const jsonPlaylist = await responsePlaylist.json();
      const playlistId = jsonPlaylist.id;

      // 5) Aggiungi i brani (uris) alla playlist
      const responseAddTracks = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            uris: trackUris,
          }),
        }
      );
      // Puoi controllare la risposta se vuoi
      const jsonAddTracks = await responseAddTracks.json();
      return jsonAddTracks;
    } catch (error) {
      console.error("Errore durante il salvataggio della playlist:", error);
      throw error;
    }
  },
};

export default Spotify;