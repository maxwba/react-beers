import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
  name: 'isLoadingSlice',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
      return state;
    },
  },
});

export const { setLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
