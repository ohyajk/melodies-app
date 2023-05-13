import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk to fetch data from an API endpoint
export const fetchAlbums = createAsyncThunk('extra/fetchAlbums', async () => {
  const response = await fetch('https://saavn.me/modules?language=punjabi');
  const data = await response.json();
  return data;
});

// Define the extra reducer with an initial state
const AlbumsFetchSlice = createSlice({
  name: 'AlbumsFetchSlice',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state of the async thunk
    builder.addCase(fetchAlbums.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Handle the fulfilled state of the async thunk
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Handle the rejected state of the async thunk
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default AlbumsFetchSlice.reducer;
