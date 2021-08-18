import styled from "styled-components";
import { Route } from "react-router-dom";

import Menu from "./components/menu/menu.components";
import Logo from "./components/menu/components/logo.component";

import DashboardPage from "./pages/dashboard/dashboard.pages";
import OrdersPage from "./pages/orders/orders.pages";

function App() {
  return (
    <Container>
      <MenuContainer>
        <Logo />
        <Route path="/" component={Menu} />
      </MenuContainer>
      <Content>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/orders" component={OrdersPage} />
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
  background-color: ${(props) => props.theme.colors.body};
`;

const Content = styled.div`
  padding: ${(props) => props.theme.space[8]};
  padding-top: ${(props) => props.theme.space[6]};
  width: 100%;
`;

export default App;
