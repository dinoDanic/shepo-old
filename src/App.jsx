import React from "react";

import useStart from "./useStart";

import styled from "styled-components";
import { Route } from "react-router-dom";

import Menu from "./components/menu/menu.components";
import Logo from "./components/menu/components/logo.component";

import DashboardPage from "./pages/dashboard/dashboard.pages";
import OrdersPage from "./pages/orders/orders.pages";
import DbPage from "./pages/db/db.page";
import ProductsPage from "./pages/products/products.page";
import Customers from "./pages/customers/customers.page";

function App() {
  useStart();
  return (
    <Container>
      <MenuContainer>
        <Logo />
        <Route path="/" component={Menu} />
      </MenuContainer>
      <Content>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/orders" component={OrdersPage} />
        <Route exact path="/db" component={DbPage} />
        <Route exact path="/db/products" component={ProductsPage} />
        <Route exact path="/db/customers" component={Customers} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const MenuContainer = styled.div`
  min-width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.brand.body};
`;

const Content = styled.div`
  padding: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[6]};
  box-shadow: 0 0 45px -40px black;
  width: 100%;
`;

export default App;
