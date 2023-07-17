import { useCallback, useState } from "react";
import { SickListProps } from "../types/sick";

const useKeyDown = (keyword: string | number, result: SickListProps) => {
  const [focusIdx, setFocusIdx] = useState(0);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.nativeEvent.isComposing) return;
      if (e.code === "ArrowUp" && keyword && focusIdx > -1) {
        setFocusIdx((prev) => prev - 1);
        return;
      }
      if (e.code === "ArrowDown" && keyword && result.length > focusIdx + 1) {
        setFocusIdx((prev) => prev + 1);
        return;
      }

      if (e.code === "Enter" && keyword && result) {
        if (focusIdx === -1 && keyword) {
          alert(keyword);
        } else {
          alert(result[focusIdx].sickNm);
        }
      }
    },
    [focusIdx, keyword, result]
  );

  return [focusIdx, setFocusIdx, onKeyDown] as const;
};

export default useKeyDown;
