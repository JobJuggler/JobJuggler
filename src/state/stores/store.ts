import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../reducers/jobReducer';

export const store = configureStore({
  reducer: jobReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;