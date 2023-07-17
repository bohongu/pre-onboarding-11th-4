import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";
import useInput from "../hooks/useInput";
import useSearch from "../hooks/useSearch";
import useKeyDown from "../hooks/useKeyDown";
import RecommandList from "./RecommandList";

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
      <RecommandList
        openRecommand={openRecommand}
        recommandRef={recommandRef}
        keyword={keyword}
        recommandResults={recommandResults}
        focusIdx={focusIdx}
      />
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

export default Search;
