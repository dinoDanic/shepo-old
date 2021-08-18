import React from "react";
import styled from "styled-components";

const OrderItem = ({ order }) => {
  const { orderId } = order;
  return (
    <Container>
      <Item>{orderId}</Item>
    </Container>
  );
};

const Container = styled.div``;
const Item = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.body};
  }
`;

export default OrderItem;
