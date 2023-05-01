import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk to fetch data from an API endpoint
export const fetchData = createAsyncThunk('extra/fetchData', async (link) => {
  const response = await fetch(`https://saavn.me/songs?link=${link}`);
  const data = await response.json();
  return data;
});

// Define the extra reducer with an initial state
const SongDetailSlice = createSlice({
  name: 'SongDetailSlice',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state of the async thunk
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Handle the fulfilled state of the async thunk
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Handle the rejected state of the async thunk
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default SongDetailSlice.reducer;
