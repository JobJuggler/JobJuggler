import { createReducer } from '@reduxjs/toolkit';
import { EXAMPLE_ACTION, EXAMPLE_ACTION_P } from '../constants/actionTypes.ts';

const initialState: EXAMPLE_ACTION_P = { sampleProp: undefined };

const exampleReducer = createReducer(initialState, (builder: any) => {
  builder.addCase(EXAMPLE_ACTION, (state: EXAMPLE_ACTION_P, action: any) => {
    state = action.payload;
  });
});

export default exampleReducer;
