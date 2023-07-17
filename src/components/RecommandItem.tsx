import React from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";
import { SickProps } from "../types/sick";

type RecommandItemProps = {
  result: SickProps;
  idx: number;
  focusIdx: number;
};

const RecommandItem = ({ result, idx, focusIdx }: RecommandItemProps) => {
  return (
    <Li focusing={focusIdx === idx ? "true" : "false"}>
      <PiMagnifyingGlass style={{ marginRight: "0.75rem", color: "#adb5bd" }} />
      {result.sickNm}
    </Li>
  );
};

const Li = styled.div<{ focusing: string }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${(props) => (props.focusing === "true" ? "#f1f3f5" : "none")};
`;

export default React.memo(RecommandItem);
