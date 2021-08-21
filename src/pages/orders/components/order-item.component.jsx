import React from "react";
import styled, { css } from "styled-components";

import Bar from "../../../components/ui/bar/bar.component";

const OrderItem = ({ order }) => {
  const { orderId, orderDate, deliveryDate, createdDate, customer, status } =
    order;

  const getDate = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const month = d.getMonth();
    if (month < 10 && day < 10) {
      return `0${day}.0${month}.`;
    }
    if (month < 10) {
      return `${day}.0${month}.`;
    }
    if (day < 10) {
      return `0${day}.${month}.`;
    }
  };

  return (
    <Container>
      <Bar>
        <Customer>{customer.name}</Customer>
        <Poslovnica>{customer.poslovnica}</Poslovnica>
        <OrderId>{orderId}</OrderId>
        <OrderDate>{getDate(orderDate)}</OrderDate>
        <DeliveryDate>{getDate(deliveryDate)}</DeliveryDate>
        <CreatedDate>{getDate(createdDate)}</CreatedDate>
        <Status>{status}</Status>
      </Bar>
    </Container>
  );
};

const Container = styled.div``;
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

export default OrderItem;
