import _ from 'lodash';
import SplitPane from 'react-split-pane';
import { useEval } from '../hooks/useEval';

const defaultHeight = window.innerHeight / 1.3;

const Viewer = () => {
  const { errorMessage, expressions } = useEval();

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
