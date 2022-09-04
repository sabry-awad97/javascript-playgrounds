import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const codeSelector = (state: RootState) => state.code;

export const selectRawCode = createSelector(codeSelector, code => code.rawText);
export const selectExpressions = createSelector(
  codeSelector,
  code => code.expressions
);

export const selectError = createSelector(codeSelector, code => code.error);
