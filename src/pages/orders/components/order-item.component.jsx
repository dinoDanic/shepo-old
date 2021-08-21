import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import useCustomers from "../../../hooks/useCustomers";

import Bar from "../../../components/ui/bar/bar.component";

const OrderItem = ({ order }) => {
  const [customer, setCustomer] = useState({});
  const { orderId, orderDate, deliveryDate, createdDate, customerId } = order;
  const getCustomer = useCustomers(customerId);

  useEffect(() => {
    setCustomer(getCustomer);
  }, [getCustomer]);

  const getDate = (date) => {
    if (!date) return;
    console.log(date);
    const toDate = date.toDate();
    const d = new Date(toDate);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    console.log(day, month);
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
      {customer && (
        <Bar>
          <Customer>{customer.name}</Customer>
          <Office>{customer.name}</Office>
          <OrderId>{orderId}</OrderId>
          <OrderDate>{getDate(orderDate)}</OrderDate>
          <DeliveryDate>{getDate(deliveryDate)}</DeliveryDate>
          <CreatedDate>{getDate(createdDate)}</CreatedDate>
          <Status>done</Status>
        </Bar>
      )}
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
const Office = styled.div`
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
