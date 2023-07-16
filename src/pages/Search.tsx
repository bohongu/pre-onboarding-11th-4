import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <>
      <Title>
        <h1>국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
      </Title>
      <SearchWrapper>
        <input placeholder="질환명을 입력해 주세요" />
      </SearchWrapper>
      <RecommandWrapper>
        <h2>추천 검색어</h2>
        <ul>
          <li>간세포암</li>
          <li>간세포암</li>
          <li>간세포암</li>
          <li>간세포암</li>
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
  padding: 3rem 0 1rem 0;
  input {
    width: 100%;
    border-radius: 42px;
    height: 3.5rem;
    border: 0;
    font-size: 1rem;
    padding: 0 1.5rem;
  }
`;

const RecommandWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;

  h2 {
    font-size: 12px;
    color: #adb5bd;
  }

  li {
    padding: 1rem 0;
  }
`;
