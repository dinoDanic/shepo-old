import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ children, ...otherProps }) => {
  return <Btn {...otherProps}>{children}</Btn>;
};

const Btn = styled.button`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.body};
  border: 1px solid ${(props) => props.theme.colors.ui.border};
  border-radius: ${(props) => props.theme.borderRadius.m};
  color: gray;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.xs};
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.ui.borderHover};
  }
`;

export default Button;
