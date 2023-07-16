import { useCallback, useState } from "react";

const useInput = (initialValue: string | number) => {
  const [state, setState] = useState(initialValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  return [state, onChange] as const;
};

export default useInput;
