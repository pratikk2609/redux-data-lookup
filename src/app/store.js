import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataslice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
