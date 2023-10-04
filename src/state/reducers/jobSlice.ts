import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Job } from '../../../global/types';
import type { RootState } from '../stores/store';

interface JobState {
  jobs: Job[];
  currentJobID: number;
}

const initialState: JobState = {
  jobs: [],
  currentJobID: 0,
};

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    loadJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
    setCurrentJob: (state, action: PayloadAction<number>) => {
      state.currentJobID = action.payload;
    },
  },
});

export const { loadJobs, setCurrentJob } = jobSlice.actions;
// export const selectCount = (state: RootState) => state.counter.value

export default jobSlice.reducer;
