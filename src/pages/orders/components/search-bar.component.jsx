import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <Container>
      <Icon icon={faSearch} />
      <Input placeholder="Pretraži po kupcu, broj narudžbe.." />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[3]};
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.darkColors.d3};
`;
const Input = styled.input`
  padding: ${(props) => props.theme.space[2]};
  border: none;
  outline: none;
  width: 100%;
  margin-left: ${(props) => props.theme.space[4]};
`;
export default SearchBar;
