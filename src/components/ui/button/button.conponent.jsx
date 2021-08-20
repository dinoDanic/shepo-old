import React from "react";
import styled from "styled-components";

const defaultStyle = (theme) => `
padding: ${theme.space[2]};
margin-bottom: ${theme.space[2]};
background-color: ${theme.colors.brand.body};
border: 1px solid ${theme.colors.ui.border};
border-radius: ${theme.borderRadius.m};
color: gray;
cursor: pointer;
font-size: ${theme.fontSize.xs};
&:hover {
  border: 1px solid ${theme.colors.ui.borderHover};
}
`;

const primary = (theme) => `
  background-color: ${theme.colors.brand.primary};
`;

const variants = {
  primary,
};

const Button = ({ children, variant, ...otherProps }) => {
  return (
    <Btn var={variant} {...otherProps}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  ${(props) => defaultStyle(props.theme)};
`;

export default Button;
