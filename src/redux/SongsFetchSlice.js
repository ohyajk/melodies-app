import { createSlice } from '@reduxjs/toolkit';
import { fetchSongsPage } from '../api/fetcher';

// Define the extra reducer with an initial state
const SongsFetchSlice = createSlice({
  name: 'SongsFetchSlice',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state of the async thunk
    builder.addCase(fetchSongsPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Handle the fulfilled state of the async thunk
    builder.addCase(fetchSongsPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Handle the rejected state of the async thunk
    builder.addCase(fetchSongsPage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default SongsFetchSlice.reducer;
