import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

const TitleText = styled.h3`
  margin-bottom: ${(props) => props.theme.space[5]};
`;

export default Title;
