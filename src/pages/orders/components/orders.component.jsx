import React from "react";
import styled, { css } from "styled-components";

import OrderItem from "./order-item.component";
import SearchBar from "./search-bar.component";

import { state } from "../orders.fake.js";

const Orders = () => {
  return (
    <Container>
      <SearchBar />
      <OrdersBar>
        <Customer>Kupac</Customer>
        <OrderId>Broj narudžbe</OrderId>
        <OrderDate>Datum narudžbe</OrderDate>
        <DeliveryDate>Datum isporuke</DeliveryDate>
        <CreatedDate>Kreirano dana</CreatedDate>
        <Status>Status</Status>
      </OrdersBar>
      {state.map((order) => (
        <OrderItem order={order} key={order.orderId} />
      ))}
    </Container>
  );
};

const Container = styled.div``;
const OrdersBar = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.body};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
const ItemsShared = css`
  flex: 1;
  min-width: 100px;
`;
const Customer = styled.div`
  ${ItemsShared}
`;
const OrderId = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;
const OrderDate = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;
const DeliveryDate = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;
const CreatedDate = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;
const Status = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: flex-end;
`;

export default Orders;
