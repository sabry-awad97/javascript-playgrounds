import { createAction } from '@reduxjs/toolkit';
import {
  DID_UPDATE_CODE,
  DID_UPDATE_ERROR,
  DID_UPDATE_EXPRESSIONS,
} from './types';

export const updateCode = createAction(DID_UPDATE_CODE, (code: string) => {
  console.clear();
  return {
    payload: code,
  };
});

export const updateExpressions = createAction(
  DID_UPDATE_EXPRESSIONS,
  (expressions: string) => ({
    payload: expressions,
  })
);

export const updateError = createAction(DID_UPDATE_ERROR, (error: string) => ({
  payload: error,
}));
