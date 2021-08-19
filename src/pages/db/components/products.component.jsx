import React from "react";
import styled, { css } from "styled-components";

import SearchBar from "../../orders/components/search-bar.component";
import MenuTrigger from "../../../components/menu/components/menu-trigger.component";
import Button from "../../../components/ui/button/button.conponent";

const Products = () => {
  return (
    <Container>
      <Header>
        <MenuTrigger />
        <Title>Baza</Title>
      </Header>
      <FnBar>
        <SearchBar />
        <Button>Novi Proizvod</Button>
      </FnBar>
      <OrdersBar>
        <Customer>Šifra</Customer>
        <Poslovnica>Naziv</Poslovnica>
        <OrderId>Težina</OrderId>
      </OrdersBar>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h2``;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[3]};
`;

const OrdersBar = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.brand.body};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const FnBar = styled.div`
  display: flex;
`;

const ItemsShared = css`
  flex: 1;
  min-width: 100px;
`;
const Customer = styled.div`
  ${ItemsShared}
`;
const Poslovnica = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;
const OrderId = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;

export default Products;
