import { createAction } from '@reduxjs/toolkit';
import { EXAMPLE_ACTION, EXAMPLE_ACTION_P } from '../constants/actiontypes';

//Example
export const exampleAction = createAction<EXAMPLE_ACTION_P>(EXAMPLE_ACTION);
