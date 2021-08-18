import React from "react";
import styled from "styled-components";

import MenuTrigger from "../../components/menu/components/menu-trigger.component";
import Orders from "./components/orders.component";

const OrdersPage = () => {
  return (
    <Contaienr>
      <Header>
        <MenuTrigger />
        <Title>Orders</Title>
      </Header>
      <Orders />
    </Contaienr>
  );
};

const Contaienr = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[10]};
`;

const Title = styled.h2``;

export default OrdersPage;
