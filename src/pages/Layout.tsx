import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background: #d0e8fd;
  height: 100vh;
  padding: 10% 30%;
`;
