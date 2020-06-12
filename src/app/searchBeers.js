/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const searchBeers = createSlice({
  name: 'searchBeers',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setTerm: (state, { payload }) => {
      const newState = state;
      newState.searchTerm = payload;
      return newState;
    },
  },
});

export const { setTerm } = searchBeers.actions;

export default searchBeers.reducer;
