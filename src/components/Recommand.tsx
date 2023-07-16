import React from "react";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";

const Recommand = () => {
  return (
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
  );
};

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

export default Recommand;
