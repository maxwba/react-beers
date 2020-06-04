import { createSlice } from '@reduxjs/toolkit';
import axios from '../api/axios';

import { setLoading } from './isLoading';

export const allBeerSlice = createSlice({
  name: 'allBeerSlice',
  initialState: {
    data: {},
    error: {},
  },
  reducers: {
    setBeers: (state, { payload }) => {
      state.data = payload;
      return state;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      return state;
    },
  },
});

export const { setBeers, setError } = allBeerSlice.actions;

export const setData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    dispatch(setBeers(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    console.log(error);
  }
};

export default allBeerSlice.reducer;
