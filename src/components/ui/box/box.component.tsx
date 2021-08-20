import React from "react";
import styled from "styled-components";

const Box: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export default Box;