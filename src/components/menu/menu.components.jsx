import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  faDatabase,
  faHome,
  faServer,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <Container>
      <List>
        <Link to="/">
          <MenuItem>
            <Icon>
              <FontAwesomeIcon icon={faHome} />
            </Icon>
            Početna
          </MenuItem>
        </Link>
        <Link to="/orders">
          <MenuItem>
            <Icon>
              <FontAwesomeIcon icon={faStickyNote} />
            </Icon>
            Narudžbe
          </MenuItem>
        </Link>
        <Link to="/db">
          <MenuItem>
            <Icon>
              <FontAwesomeIcon icon={faDatabase} />
            </Icon>
            Baza
          </MenuItem>
        </Link>
      </List>
    </Container>
  );
};

const Container = styled.div`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled.ul``;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
  font-size: ${(props) => props.theme.fontSize.s};
  transition: 0.2s ease all;
  font-weight: 300;
  border-radius: 10px;
  color: ${(props) => props.theme.darkColors.l4};
  /* border-left: 2px solid transparent; */
  svg {
    transition: 0.2s ease all;
    margin-right: 10px;
    opacity: 0.7;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    /* color: ${(props) => props.theme.colors.primary}; */
    svg {
      margin-right: 10px;
    }
  }
`;
const Icon = styled.div`
  width: 30px;
`;

export default Menu;
