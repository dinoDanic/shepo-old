import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/header/header.component";
import SearchBar from "../orders/components/search-bar.component";
import Bar from "../../components/ui/bar/bar.component";
import Button from "../../components/ui/button/button.conponent";
import NewCustomer from "./components/new-customer.component";

const Customers = () => {
  const [showCustomer, setShowCustomer] = useState(false);
  return (
    <Container>
      <Header title="Kupci" />
      <FnBar>
        <SearchBar />
        <Button
          onClick={() => {
            setShowCustomer(true);
          }}
        >
          Novi Kupac
        </Button>
      </FnBar>
      <Bar variant="main">
        <CustomerName>Naziv</CustomerName>
      </Bar>
      {showCustomer && <NewCustomer setShowCustomer={setShowCustomer} />}
    </Container>
  );
};

const Container = styled.div``;
const CustomerName = styled.div``;
const FnBar = styled.div`
  display: flex;
`;

export default Customers;
