import { FC } from 'react';

import CodeMirror from 'react-codemirror';
import { useActions, useAppSelector } from '../redux/hooks';
import { selectRawCode } from '../redux/selectors';

import 'codemirror/mode/jsx/jsx';

interface EditorProps {}

const Editor: FC<EditorProps> = () => {
  const code = useAppSelector(selectRawCode);

  const { updateCode } = useActions();

  return (
    <div>
      <CodeMirror
        value={code}
        onChange={newCode => updateCode(newCode)}
        options={{ mode: 'jsx', lineNumbers: true, tabSize: 2 }}
      />
    </div>
  );
};

export default Editor;
