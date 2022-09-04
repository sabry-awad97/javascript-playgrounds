import { createAction } from '@reduxjs/toolkit';
import { DID_UPDATE_CODE } from './types';

export const updateCode = createAction(DID_UPDATE_CODE, (code: string) => ({
  payload: code,
}));
