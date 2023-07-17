import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";
import useInput from "../hooks/useInput";
import useSearch from "../hooks/useSearch";
import useKeyDown from "../hooks/useKeyDown";

const Search = () => {
  const [keyword, onChangeKeyword] = useInput("");
  const recommandResults = useSearch(keyword);
  const [focusIdx, setFocusIdx, onKeyDown] = useKeyDown(
    keyword,
    recommandResults
  );
  const [openRecommand, setOpenRecommand] = useState(false);
  const recommandRef = useRef<HTMLDivElement>(null);
  const onClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setOpenRecommand(true);
    setFocusIdx(0);
  };

  useEffect(() => {
    if (!keyword) {
      setOpenRecommand(false);
      setFocusIdx(0);
    } else {
      setOpenRecommand(true);
      setFocusIdx(0);
    }
  }, [keyword, setFocusIdx]);

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (openRecommand && !recommandRef.current?.contains(e.target))
        setOpenRecommand(false);
    };
    document.addEventListener("click", onClickOutside);

    return () => document.removeEventListener("click", onClickOutside);
  }, [openRecommand]);

  return (
    <div>
      <SearchWrapper>
        <input
          placeholder="질환명을 입력해 주세요"
          value={keyword}
          onChange={onChangeKeyword}
          onClick={onClickInput}
          onKeyDown={onKeyDown}
        />
        <button>
          <PiMagnifyingGlass />
        </button>
      </SearchWrapper>
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
              <Li
                key={result.sickCd}
                focusing={focusIdx === idx ? "true" : "false"}
              >
                <PiMagnifyingGlass
                  style={{ marginRight: "0.75rem", color: "#adb5bd" }}
                />
                {result.sickNm}
              </Li>
            ))}
          </ul>
        </RecommandWrapper>
      )}
    </div>
  );
};

const SearchWrapper = styled.div`
  position: relative;
  margin: 3rem 0 1rem 0;
  input {
    width: 100%;
    border-radius: 42px;
    height: 3.5rem;
    border: 0;
    font-size: 1rem;
    padding: 0 1.5rem;
  }

  button {
    position: absolute;
    background: #007ce8;
    border: none;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 4px;
    right: 4px;
    font-size: 1.25rem;
    color: #ffffff;
    cursor: pointer;
  }
`;

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

const Li = styled(Keyword)<{ focusing: string }>`
  background: ${(props) => (props.focusing === "true" ? "#f1f3f5" : "none")};
`;

export default Search;
