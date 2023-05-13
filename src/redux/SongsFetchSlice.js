import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk to fetch data from an API endpoint
export const fetchSongs = createAsyncThunk('extra/fetchSongs', async () => {
  const response = await fetch('https://saavn.me/playlists?id=1070105513');
  const data = await response.json();
  return data;
});



// Define the extra reducer with an initial state
const SongsFetchSlice = createSlice({
  name: 'SongsFetchSlice',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state of the async thunk
    builder.addCase(fetchSongs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Handle the fulfilled state of the async thunk
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Handle the rejected state of the async thunk
    builder.addCase(fetchSongs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default SongsFetchSlice.reducer;
