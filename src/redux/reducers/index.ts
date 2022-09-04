import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { updateCode, updateError, updateExpressions } from '../actions';

const INITIAL_STATE = {
  rawText: '',
  expressions: '',
  error: '',
};

const codeReducer = createReducer(INITIAL_STATE, builder =>
  builder
    .addCase(updateCode, (state, action) => {
      state.rawText = action.payload;
    })
    .addCase(updateExpressions, (state, action) => {
      state.expressions = action.payload;
    })
    .addCase(updateError, (state, action) => {
      state.error = action.payload;
    })
    .addDefaultCase(state => state)
);

export const rootReducer = combineReducers({
  code: codeReducer,
});
