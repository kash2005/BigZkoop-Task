import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataRequest: (state) => {
        state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
    },
    fetchDataFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;
