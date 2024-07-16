import { createAsyncThunk } from "@reduxjs/toolkit";

// Fetch All Search Query
export const fetchQuery = createAsyncThunk('extra/fetchQuery', async (query) => {
    const response = await fetch(`https://saavn.dev/search/all?query=${query}`);
    const data = await response.json();
    return data;
  });

// Fetch query song Data
export const fetchQuerySong = createAsyncThunk('extra/fetchQuerySong', async (songLink) => {
    const response = await fetch(`https://saavn.dev/songs?link=${songLink}`);
    const data = await response.json();
    return data;
});

// Fetch query album Data
export const fetchQueryAlbum = createAsyncThunk('extra/fetchQueryAlbum', async (albumLink) => {
    const response = await fetch(`https://saavn.dev/albums?link=${albumLink}`);
    const data = await response.json();
    return data;
});

// Fetch query Playlist Data
export const fetchQueryPlaylist = createAsyncThunk('extra/fetchQueryPlaylist', async (playlistId) => {
    const response = await fetch(`https://saavn.dev/playlists?id=${playlistId}`);
    const data = await response.json();
    return data;
});

// Fetch Songs Page Data
export const fetchSongsPage = createAsyncThunk('extra/fetchSongsPage', async () => {
    const response = await fetch('https://saavn.dev/playlists?id=1070105513');
    const data = await response.json();
    return data;
});

// Fetch Home Page Data
export const fetchHomePage = createAsyncThunk('extra/fetchHomePage', async () => {
    const response = await fetch('https://saavn.dev/playlists?id=1053900960');
    const data = await response.json();
    return data;
});

// Fetch Punjabi Modules Page Data : Album & Playlists
export const fetchModules = createAsyncThunk('extra/fetchModules', async () => {
    const response = await fetch('https://saavn.dev/modules?language=punjabi');
    const data = await response.json();
    return data;
});
