import { configureStore } from '@reduxjs/toolkit';
import isLoading from './isLoading';
import allBeersReducer from './allBeers';

export default configureStore({
  reducer: {
    loading: isLoading,
    allBeers: allBeersReducer,
  },
});
