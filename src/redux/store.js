import { configureStore } from '@reduxjs/toolkit';

import { daysReducer } from './slices/daysSlice';

export const store = configureStore({
  reducer: {
    days: daysReducer,
  },
});
