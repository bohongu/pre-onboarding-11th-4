import React from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";

const Search = () => {
  return (
    <SearchWrapper>
      <input placeholder="질환명을 입력해 주세요" />
      <button>
        <PiMagnifyingGlass />
      </button>
    </SearchWrapper>
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
