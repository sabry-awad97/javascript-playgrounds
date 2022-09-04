import { useEffect, useState } from 'react';
import initSwc, { transformSync } from '@swc/wasm-web';

interface ITranformSyncOutput {
  code: string;
  map?: string;
}

export const useBundler = (rawCode: string) => {
  const [initialized, setInitialized] = useState(false);
  const [output, setOutput] = useState<ITranformSyncOutput>({ code: rawCode });
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (initialized) return;

    async function importAndRunSwcOnMount() {
      try {
        await initSwc('/wasm-web_bg.wasm');
      } catch (error: any) {
        setErrors(error.toString());
      }
      setInitialized(true);
    }

    importAndRunSwcOnMount();
  }, []);

  useEffect(() => {
    if (!initialized) return;
    try {
      const output = transformSync(rawCode, {});
      setOutput(output);
      setErrors('');
    } catch (error: any) {
      setErrors(error.toString());
    }
  }, [rawCode]);

  return { rawCode, transformedCode: output.code, errors };
};
