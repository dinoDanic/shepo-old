import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";

import Menu from "./components/menu/menu.components";
import Logo from "./components/menu/components/logo.component";

import Dashboard from "./pages/dashboard.pages";

function App() {
  return (
    <Container>
      <MenuContainer>
        <Logo />
        <Route path="/" component={Menu} />
      </MenuContainer>
      <Content>
        <Route exact path="/" component={Dashboard} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const MenuContainer = styled.div`
  width: 230px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.body};
`;

const Content = styled.div`
  padding: ${(props) => props.theme.space[4]};
`;

export default App;
