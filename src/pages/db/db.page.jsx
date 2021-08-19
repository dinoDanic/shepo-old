import React from "react";
import styled from "styled-components";
import MenuTrigger from "../../components/menu/components/menu-trigger.component";

import Products from "./components/products.component";

const DbPage = () => {
  return (
    <Container>
      <ProductsList>
        <Products />
      </ProductsList>
    </Container>
  );
};

const Container = styled.div``;
const ProductsList = styled.div``;

export default DbPage;
