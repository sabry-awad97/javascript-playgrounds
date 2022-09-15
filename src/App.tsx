import SplitPane from 'react-split-pane';
import Editor from './components/Editor';
import Viewer from './components/Viewer';

import './App.css';

const height = window.innerHeight;

const App = () => {
  return (
    // @ts-ignore
    <SplitPane split="vertical" defaultSize={height}>
      <Editor />
      <Viewer />
    </SplitPane>
  );
};

export default App;
