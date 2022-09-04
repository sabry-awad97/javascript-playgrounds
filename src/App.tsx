import SplitPane from 'react-split-pane';
import Editor from './components/Editor';

import './App.css';

const width = window.innerHeight;

const App = () => {
  return (
    <SplitPane split="vertical" defaultSize={width}>
      <Editor />
      <div />
    </SplitPane>
  );
};

export default App;
