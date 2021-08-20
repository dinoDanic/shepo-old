import React from "react";
import styled from "styled-components";

import Orders from "./components/orders.component";
import Header from "../../components/header/header.component";

const OrdersPage = () => {
  return (
    <Contaienr>
      <Header title="Narudžbe" />
      <Orders />
    </Contaienr>
  );
};

const Contaienr = styled.div``;

/* const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[3]};
`; */

const Title = styled.h2``;

export default OrdersPage;
