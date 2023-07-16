import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";
import useInput from "../hooks/useInput";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const [keyword, onChangeKeyword] = useInput("");
  const [openRecommand, setOpenRecommand] = useState(false);
  const RecommandRef = useRef<HTMLDivElement>(null);
  const RecommandResults = useSearch(keyword);
  const onClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setOpenRecommand(true);
  };

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (openRecommand && !RecommandRef.current?.contains(e.target))
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
        />
        <button>
          <PiMagnifyingGlass />
        </button>
      </SearchWrapper>
      {openRecommand && (
        <RecommandWrapper ref={RecommandRef}>
          <h2>추천 검색어</h2>
          <ul>
            {RecommandResults.map((result) => (
              <Li key={result.sickCd}>
                <PiMagnifyingGlass style={{ marginRight: "0.75rem" }} />
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
  padding: 1rem;

  h2 {
    font-size: 12px;
    color: #adb5bd;
    padding-bottom: 0.25rem;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
`;

export default Search;
