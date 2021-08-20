import React from "react";
import styled, { css } from "styled-components";

import Bar from "../../../components/ui/bar/bar.component";

const Product = ({ product }) => {
  const { productName, productWeight, productCode } = product;
  return (
    <Container>
      <Bar>
        <ProductCode>{productCode}</ProductCode>
        <ProductName>{productName}</ProductName>
        <ProductWeight>{productWeight}</ProductWeight>
      </Bar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const shareProduct = css`
  flex: 1;
`;
const ProductCode = styled.div`
  ${shareProduct}
`;
const ProductName = styled.div`
  ${shareProduct}
`;
const ProductWeight = styled.div`
  ${shareProduct}
`;
export default Product;
