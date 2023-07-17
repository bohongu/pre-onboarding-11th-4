import { useCallback, useState } from "react";
import { SickListProps } from "../types/sick";

const useKeyDown = (keyword: string | number, result: SickListProps) => {
  const [focusIdx, setFocusIdx] = useState(0);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.nativeEvent.isComposing) return;
      if (e.code === "ArrowUp" && keyword && focusIdx > 0) {
        setFocusIdx((prev) => prev - 1);
        return;
      }
      if (e.code === "ArrowDown" && keyword && result.length > focusIdx + 1) {
        setFocusIdx((prev) => prev + 1);
        return;
      }
    },
    [focusIdx, keyword, result.length]
  );

  return [focusIdx, setFocusIdx, onKeyDown] as const;
};

export default useKeyDown;
