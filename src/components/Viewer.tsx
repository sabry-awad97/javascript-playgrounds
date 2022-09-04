import { useEffect } from 'react';
import _ from 'lodash';
import SplitPane from 'react-split-pane';
import { useActions, useAppSelector } from '../redux/hooks';
import { useBundler } from '../hooks/useBundler';
import {
  selectError,
  selectExpressions,
  selectRawCode,
} from '../redux/selectors';

const defaultHeight = window.innerHeight / 1.3;

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

const Viewer = () => {
  const expressions = useAppSelector(selectExpressions);
  const code = useAppSelector(selectRawCode);
  const errorMessage = useAppSelector(selectError);

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

  return (
    <SplitPane
      split="horizontal"
      defaultSize={defaultHeight}
      className="viewer"
    >
      <div className="result">{expressions}</div>
      <div className="errors">{errorMessage}</div>
    </SplitPane>
  );
};

export default Viewer;
