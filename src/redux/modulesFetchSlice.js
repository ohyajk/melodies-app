import { createSlice } from '@reduxjs/toolkit';
import { fetchModules } from '../api/fetcher';

// Define the extra reducer with an initial state
const ModulesFetchSlice = createSlice({
  name: 'ModulesFetchSlice',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state of the async thunk
    builder.addCase(fetchModules.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Handle the fulfilled state of the async thunk
    builder.addCase(fetchModules.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Handle the rejected state of the async thunk
    builder.addCase(fetchModules.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default ModulesFetchSlice.reducer;
