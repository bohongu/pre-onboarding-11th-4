import React from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";

const Search = () => {
  return (
    <>
      <Title>
        <h1>국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
      </Title>
      <SearchWrapper>
        <input placeholder="질환명을 입력해 주세요" />
        <button>
          <PiMagnifyingGlass />
        </button>
      </SearchWrapper>
      <RecommandWrapper>
        <h2>추천 검색어</h2>
        <ul>
          <li>
            <PiMagnifyingGlass style={{ marginRight: "0.75rem" }} />
            간세포암
          </li>
          <li>
            <PiMagnifyingGlass style={{ marginRight: "0.75rem" }} />
            간세포암
          </li>
          <li>
            <PiMagnifyingGlass style={{ marginRight: "0.75rem" }} />
            간세포암
          </li>
        </ul>
      </RecommandWrapper>
    </>
  );
};

export default Search;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

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

  li {
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
  }
`;
