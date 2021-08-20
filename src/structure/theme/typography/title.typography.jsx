import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

const TitleText = styled.h3``;

export default Title;
