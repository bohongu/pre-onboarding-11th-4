import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <TitleWrapper>
      <h1>국내 모든 임상시험 검색하고</h1>
      <h1>온라인으로 참여하기</h1>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.h1`
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

export default Title;
