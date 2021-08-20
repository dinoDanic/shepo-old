import React, { useState } from "react";
import styled, { css } from "styled-components";

import SearchBar from "../orders/components/search-bar.component";
import MenuTrigger from "../../components/menu/components/menu-trigger.component";
import Button from "../../components/ui/button/button.conponent";
import AddProduct from "../../components/add-product/add-product.component";

interface IProps {
  setShowAddProduct: React.SetStateAction<boolean>;
}

const ProductsPage: React.FC<IProps> = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <Container>
      <Header>
        <MenuTrigger />
        <Title>Baza</Title>
      </Header>
      <FnBar>
        <SearchBar />
        <Button onClick={() => setShowAddProduct(true)}>Novi Proizvod</Button>
      </FnBar>
      <OrdersBar>
        <Customer>Šifra</Customer>
        <Poslovnica>Naziv</Poslovnica>
        <OrderId>Težina</OrderId>
      </OrdersBar>
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
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
  border-radius: ${({ theme }) => theme.borderRadius.m};
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

export default ProductsPage;
