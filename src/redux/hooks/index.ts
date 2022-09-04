import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import * as actions from '../actions';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
