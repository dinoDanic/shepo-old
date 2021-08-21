import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase.utils";
import styled, { css } from "styled-components";

import OrderItem from "./order-item.component";
import SearchBar from "./search-bar.component";
import Button from "../../../components/ui/button/button.conponent";
import Bar from "../../../components/ui/bar/bar.component";
import AddOrder from "../../../components/add-order/add-order.component";

const Orders = () => {
  const [state, setState] = useState([]);
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  useEffect(() => {
    db.collection("orders").onSnapshot((orders) => {
      let list = [];
      orders.forEach((order) => {
        list.push(order.data());
      });
      setState(list);
    });
  }, []);
  return (
    <Container>
      <FnBar>
        <SearchBar />
        <Button
          onClick={() => {
            setShowCreateOrder(!showCreateOrder);
          }}
        >
          Nova Narudžba
        </Button>
      </FnBar>
      <Bar variant="main">
        <Customer>Kupac</Customer>
        <Poslovnica>Poslovnica</Poslovnica>
        <OrderId>Broj narudžbe</OrderId>
        <OrderDate>Datum narudžbe</OrderDate>
        <DeliveryDate>Datum isporuke</DeliveryDate>
        <CreatedDate>Kreirano dana</CreatedDate>
        <Status>Status</Status>
      </Bar>
      {state.map((order) => (
        <OrderItem order={order} key={order.orderId} />
      ))}
      {showCreateOrder && <AddOrder setLayer={setShowCreateOrder} />}
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
const FnBar = styled.div`
  display: flex;
`;

export default Orders;
