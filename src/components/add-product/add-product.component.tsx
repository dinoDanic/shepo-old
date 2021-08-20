import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import BoxPop from "../ui/box-pop/box-pop.component";

interface IProps {
  setShowAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProduct: FC<IProps> = ({ setShowAddProduct }) => {
  return (
    <BoxPop setShowAddProduct={setShowAddProduct}>
      <Container>add product</Container>
    </BoxPop>
  );
};

const Container = styled.div``;

export default AddProduct;
