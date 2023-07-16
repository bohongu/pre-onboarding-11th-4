import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  background: #d0e8fd;
  height: 100vh;
  padding: 10% 30%;
`;
