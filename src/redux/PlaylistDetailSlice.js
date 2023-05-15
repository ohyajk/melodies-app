import { createSlice} from '@reduxjs/toolkit';
import { fetchQueryPlaylist } from '../api/fetcher';

// Define the extra reducer with an initial state
const PlaylistDetailSlice = createSlice({
  name: 'PlaylistDetailSlice',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state of the async thunk
    builder.addCase(fetchQueryPlaylist.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Handle the fulfilled state of the async thunk
    builder.addCase(fetchQueryPlaylist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Handle the rejected state of the async thunk
    builder.addCase(fetchQueryPlaylist.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default PlaylistDetailSlice.reducer;
