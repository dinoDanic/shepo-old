import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../firebase/firebase.utils";

import Header from "../../components/header/header.component";
import SearchBar from "../orders/components/search-bar.component";
import Bar from "../../components/ui/bar/bar.component";
import Button from "../../components/ui/button/button.conponent";
import NewCustomer from "./components/new-customer.component";
import Customer from "./components/customer.component";

const Customers = () => {
  const [showCustomer, setShowCustomer] = useState(false);
  const [state, setState] = useState([]);
  useEffect(() => {
    db.collection("customers").onSnapshot((customers) => {
      let list = [];
      customers.forEach((customer) => {
        list.push(customer.data());
      });
      setState(list);
    });
  }, []);
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
        <CustomerAdress>Adresa</CustomerAdress>
        <CustomerId>ID</CustomerId>
      </Bar>
      {state.map((customer) => (
        <Customer customer={customer} />
      ))}
      {showCustomer && <NewCustomer setShowCustomer={setShowCustomer} />}
    </Container>
  );
};

const Container = styled.div``;
const CustomerName = styled.div``;
const CustomerAdress = styled.div``;
const CustomerId = styled.div``;
const FnBar = styled.div`
  display: flex;
`;

export default Customers;
