import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Job } from '../../../global/types';
import type { RootState } from '../stores/store';

interface JobState {
  jobs: Job[];
}

const initialState: JobState = {
  jobs: [],
};

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    loadJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
  },
});

export const { loadJobs } = jobSlice.actions;
// export const selectCount = (state: RootState) => state.counter.value

export default jobSlice.reducer;
