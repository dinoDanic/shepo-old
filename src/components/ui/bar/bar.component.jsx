import React from "react";
import styled from "styled-components";

const Bar = ({ children, variant }) => {
  return <BarContainer variant={variant}>{children}</BarContainer>;
};

const body = (theme) => `
  &:hover {
    background-color: ${theme.colors.brand.body};
  }
`;

const main = (theme) => `
  background-color: ${theme.colors.brand.body};
  font-weight: 600;
`;

const variants = {
  body,
  main,
};

const defaultStyle = (theme) => `
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.space[2]} ${theme.space[4]};
  cursor: pointer;
  border-radius: ${theme.borderRadius.s};
  margin-bottom: ${theme.space[1]};
  font-weight: 300;
  
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    &:first-child {
        justify-content: flex-start;
    }
    &:last-child {
        justify-content: flex-end;
    }
  }
`;

const BarContainer = styled.div`
  ${(props) => defaultStyle(props.theme)};
  ${({ variant, theme }) => variants[variant](theme)}
`;

Bar.defaultProps = {
  variant: "body",
};

export default Bar;
