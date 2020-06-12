import { configureStore } from '@reduxjs/toolkit';
import isLoading from './isLoading';
import allBeersReducer from './allBeers';
import searchforBeer from './searchBeers';

export default configureStore({
  reducer: {
    loading: isLoading,
    allBeers: allBeersReducer,
    searchBeer: searchforBeer,
  },
});
