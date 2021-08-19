import React from "react";
import styled from "styled-components";

import MenuTrigger from "../menu/components/menu-trigger.component";

const Header = ({ title }) => {
  return (
    <Container>
      <MenuTrigger />
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[3]};
`;
const Title = styled.h2``;
