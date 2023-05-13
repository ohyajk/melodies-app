import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk to fetch data from an API endpoint
export const fetchSongQuery = createAsyncThunk('extra/fetchSongQuery', async (query) => {
  const response = await fetch(`https://saavn.me/search/all?query=${query}`);
  const data = await response.json();
  return data;
});



// Define the extra reducer with an initial state
const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state of the async thunk
    builder.addCase(fetchSongQuery.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Handle the fulfilled state of the async thunk
    builder.addCase(fetchSongQuery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Handle the rejected state of the async thunk
    builder.addCase(fetchSongQuery.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default searchSlice.reducer;
