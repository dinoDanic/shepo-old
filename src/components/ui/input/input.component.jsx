import React from "react";
import styled from "styled-components";

const Input = ({ ...otherProps }) => {
  return <InputUi spellcheck="false" {...otherProps} />;
};

const InputUi = styled.input`
  padding: ${(props) => props.theme.space[2]};
  border: 1px solid ${(props) => props.theme.colors.ui.border};
  border-radius: ${(props) => props.theme.borderRadius.s};
  width: 100%;
  &:focus {
    outline-color: ${(props) => props.theme.colors.brand.primary};
  }
`;

export default Input;
