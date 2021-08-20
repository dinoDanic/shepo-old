import React from "react";
import styled from "styled-components";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuTrigger = () => {
  return (
    <Container>
      <Icon icon={faBars} />
    </Container>
  );
};

const Container = styled.div`
  margin-right: ${(props) => props.theme.space[6]};
  svg {
    color: #333;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export default MenuTrigger;
