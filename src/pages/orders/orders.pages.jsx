import React from "react";
import styled from "styled-components";

import MenuTrigger from "../../components/menu/components/menu-trigger.component";
import Orders from "./components/orders.component";

const OrdersPage = () => {
  return (
    <Contaienr>
      <Header>
        <MenuTrigger />
        <Title>Narudžbe</Title>
      </Header>
      <Orders />
    </Contaienr>
  );
};

const Contaienr = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[3]};
`;

const Title = styled.h2``;

export default OrdersPage;
