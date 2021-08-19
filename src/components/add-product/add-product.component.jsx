import React from "react";
import styled from "styled-components";

import BoxPop from "../ui/box-pop/box-pop.component";

const AddProduct = ({ setShowAddProduct }) => {
  return (
    <BoxPop setShowAddProduct={setShowAddProduct}>
      <Container>add product</Container>
    </BoxPop>
  );
};

const Container = styled.div``;

export default AddProduct;
