import React from "react";
import styled from "styled-components";

import { faHome, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <Container>
      <List>
        <MenuItem>
          <FontAwesomeIcon icon={faHome} />
          Početnaa
        </MenuItem>
        <MenuItem>
          {" "}
          <FontAwesomeIcon icon={faStickyNote} />
          Narudžbe
        </MenuItem>
      </List>
    </Container>
  );
};

const Container = styled.div``;

const List = styled.ul``;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
  font-size: ${(props) => props.theme.fontSize["small"]};
  transition: 0.2s ease all;

  /* border-left: 2px solid transparent; */

  svg {
    margin-right: 10px;
    color: #333;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
    color: ${(props) => props.theme.colors.primary};
    svg {
      margin-right: 10px;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default Menu;
