import React, { useState } from "react";
import styled from "styled-components";
import BoxPop from "../ui/box-pop/box-pop.component";
import { useSelector } from "react-redux";

import Title from "../../structure/theme/typography/title.typography";
import Input from "../ui/input/input.component";
import Select from "../ui/select/select.component";
import Button from "../ui/button/button.conponent";
import { createOrder } from "../../firebase/firebase.functions";

const AddOrder = ({ setLayer }) => {
  const customers = useSelector((state) => state.customers.allCustomers);
  const [customerId, setCustomerId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [createdDate] = useState(new Date());
  const [orderDate, setOrderDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerId === "") {
      alert("kupac je obavezan");
      return;
    }
    const newOrder = {
      orderId,
      createdDate,
      orderDate,
      deliveryDate,
      customerId,
    };
    try {
      createOrder(newOrder);
    } catch (err) {
      console.log(err);
    } finally {
      setLayer(false);
    }
  };

  return (
    <BoxPop setLayer={setLayer}>
      <Container>
        <Title>Nova Narudžba</Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Section>
            <Name>Kupac</Name>
            <Select onChange={(e) => setCustomerId(e.target.value)}>
              {customers.map((customer) => {
                return <Option value={customer.id}>{customer.name}</Option>;
              })}
            </Select>
          </Section>
          <Section>
            <Name>Broj narudžbe</Name>
            <Input onChange={(e) => setOrderId(e.target.value)} />
          </Section>
          <Section>
            <Name>Datum narudžbe</Name>
            <Input
              type="date"
              onChange={(e) => setOrderDate(new Date(e.target.value))}
            />
          </Section>
          <Section>
            <Name>Datum isporuke</Name>
            <Input
              type="date"
              onChange={(e) => setDeliveryDate(new Date(e.target.value))}
            />
          </Section>
          <ButtonContainer>
            <Button variant="primary">Kreiraj Narudžbu</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </BoxPop>
  );
};
const Container = styled.div`
  position: relative;
  height: 100%;
`;
const Form = styled.form``;
const Section = styled.div`
  width: 50%;
  margin-bottom: ${(props) => props.theme.space[4]};
`;
const Name = styled.div`
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const Option = styled.option``;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default AddOrder;
