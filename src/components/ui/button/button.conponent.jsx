import React from "react";
import styled from "styled-components";

const defaultStyle = (theme) => `
padding: ${theme.space[3]} ${theme.space[3]};
border: 1px solid ${theme.colors.ui.border};
border-radius: ${theme.borderRadius.m};
color: gray;
font-weight: 500;
cursor: pointer;
height: fit-content;
font-size: ${theme.fontSize.xs};

&:hover {
  border: 1px solid ${theme.colors.ui.borderHover};
}
`;

const body = (theme) => `
  background-color: ${theme.colors.brand.body};
`;

const primary = (theme) => `
  background-color: ${theme.colors.brand.primary};
  color: white;
`;

const variants = {
  primary,
  body,
};

const Button = ({ children, variant, ...otherProps }) => {
  return (
    <Btn variant={variant} {...otherProps}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  ${(props) => defaultStyle(props.theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Button.defaultProps = {
  variant: "body",
};

export default Button;
