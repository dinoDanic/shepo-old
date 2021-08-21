import React from "react";
import styled from "styled-components";

const Select = ({ children, ...otherPorps }) => {
  return <SelectUi {...otherPorps}>{children}</SelectUi>;
};

const SelectUi = styled.select`
  width: 100%;
  padding: ${(props) => props.theme.space[2]};
  border: 1px solid ${(props) => props.theme.colors.ui.border};
  border-radius: ${(props) => props.theme.borderRadius.s};
  width: 100%;
  &:focus {
    outline-color: ${(props) => props.theme.colors.brand.primary};
  }
`;

export default Select;
