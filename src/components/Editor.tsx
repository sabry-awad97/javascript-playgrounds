import { FC } from 'react';
import CodeMirror from 'react-codemirror';
import { useActions, useAppSelector } from '../redux/hooks';
import 'codemirror/mode/jsx/jsx';

interface EditorProps {}

const Editor: FC<EditorProps> = () => {
  const code = useAppSelector(state => state.code);
  const { updateCode } = useActions();
  return (
    <div>
      <CodeMirror
        value={code}
        onChange={newValue => updateCode(newValue)}
        options={{ mode: 'jsx', lineNumbers: true, tabSize: 2 }}
      />
    </div>
  );
};

export default Editor;
