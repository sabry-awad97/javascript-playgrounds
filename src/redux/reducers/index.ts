import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { updateCode } from '../actions';

const INITIAL_STATE = '';

const codeReducer = createReducer(INITIAL_STATE, builder =>
  builder
    .addCase(updateCode, (state, action) => {
      state = action.payload;
      return state;
    })
    .addDefaultCase(state => state)
);

export const rootReducer = combineReducers({
  code: codeReducer,
});
