import { useEffect } from 'react';
import { useActions, useAppSelector } from '../redux/hooks';
import { useBundler } from './useBundler';
import {
  selectError,
  selectExpressions,
  selectRawCode,
} from '../redux/selectors';
import _ from 'lodash';

const evaluateExpressions = (expression: string) => {
  const result = eval(expression);

  if (_.isFunction(result) && result.name) {
    return <i>Function {result.name}</i>;
  } else if (_.isBoolean(result)) {
    return result ? 'True' : 'False';
  } else if (_.isObject(result) || _.isArray(result)) {
    return JSON.stringify(result);
  }

  return result;
};

export const useEval = () => {
  const expressions = useAppSelector(selectExpressions);
  const errorMessage = useAppSelector(selectError);

  const code = useAppSelector(selectRawCode);
  const { transformedCode, errors } = useBundler(code);
  const { updateExpressions, updateError } = useActions();

  useEffect(() => {
    updateError(errors);
  }, [errors]);

  useEffect(() => {
    try {
      const result = evaluateExpressions(transformedCode);
      updateExpressions(result);
      updateError('');
    } catch (error: any) {
      updateError(error.toString());
    }
  }, [transformedCode]);

  return { expressions, errorMessage };
};
