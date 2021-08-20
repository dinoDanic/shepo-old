import React from "react";
import styled from "styled-components";

const Box = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  padding: ${(props) => props.theme.space[6]};
  background-color: white;
  width: 100%;
  height: 100%;
`;

export default Box;
