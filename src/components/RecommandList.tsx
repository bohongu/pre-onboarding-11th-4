import React from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";
import { SickListProps } from "../types/sick";
import RecommandItem from "./RecommandItem";

type RecommandListProps = {
  openRecommand: boolean;
  recommandRef: React.RefObject<HTMLDivElement>;
  keyword: string | number;
  recommandResults: SickListProps;
  focusIdx: number;
};

const RecommandList = ({
  openRecommand,
  recommandRef,
  keyword,
  recommandResults,
  focusIdx,
}: RecommandListProps) => {
  return (
    <>
      {openRecommand && (
        <RecommandWrapper ref={recommandRef}>
          {keyword && (
            <Keyword>
              <PiMagnifyingGlass
                style={{ marginRight: "0.75rem", color: "#adb5bd" }}
              />
              {keyword}
            </Keyword>
          )}
          <h2>추천 검색어</h2>
          <ul>
            {recommandResults.map((result, idx) => (
              <RecommandItem
                key={result.sickCd}
                result={result}
                idx={idx}
                focusIdx={focusIdx}
              />
            ))}
          </ul>
        </RecommandWrapper>
      )}
    </>
  );
};

const RecommandWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem 0;

  h2 {
    font-size: 12px;
    color: #adb5bd;
    padding: 0 1rem 0.25rem 1rem;
  }
`;

const Keyword = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
`;

export default RecommandList;
