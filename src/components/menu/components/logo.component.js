import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoText>Shepo</LogoText>;
};

const LogoText = styled.div`
  font-family: ${(props) => props.theme.fonts.logo};
  /* font-size: ${(props) => props.theme.fontSize.xxl}; */
  color: rgba(0, 0, 0, 0.3);
  margin-top: ${(props) => props.theme.space[8]};
  margin-bottom: ${(props) => props.theme.space[10]};
  margin-left: ${(props) => props.theme.space[8]};
  /*  margin-left: ${(props) => props.theme.space[7]}; */
  pointer-events: none;
`;

export default Logo;
