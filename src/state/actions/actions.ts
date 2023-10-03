import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { EXAMPLE_ACTION, EXAMPLE_ACTION_P } from '../constants/actiontypes.ts';

//Example
export const exampleAction: ActionCreatorWithPayload<
  EXAMPLE_ACTION_P,
  'EXAMPLE_ACTION'
> = createAction('EXAMPLE_ACTION');
