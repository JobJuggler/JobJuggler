import { configureStore } from '@reduxjs/toolkit';
import jobSlice from '../reducers/jobSlice';

export const store = configureStore({
  reducer: jobSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;