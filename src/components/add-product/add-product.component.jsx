import React, { useState } from "react";
import styled from "styled-components";

import { createProduct } from "../../firebase/firebase.functions";

import BoxPop from "../ui/box-pop/box-pop.component";
import Input from "../ui/input/input.component";

import Title from "../../structure/theme/typography/title.typography";
import Button from "../ui/button/button.conponent";

const AddProduct = ({ setShowAddProduct }) => {
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      createProduct(productCode, productName, productWeight);
    } catch (err) {
      console.log(err);
    }
    setShowAddProduct(false);
  };

  return (
    <BoxPop setShowAddProduct={setShowAddProduct}>
      <Container>
        <Title>Dodaj Proizvod</Title>
        <Form onSubmit={handleSubmit}>
          <FormSection>
            <InputTitle>Šifra Proizvoda</InputTitle>
            <Input
              onChange={(e) => setProductCode(e.target.value)}
              placeholder=""
            />
          </FormSection>
          <FormSection>
            <InputTitle>Naziv proizvoda</InputTitle>
            <Input
              onChange={(e) => setProductName(e.target.value)}
              placeholder=""
            />
          </FormSection>
          <FormSection>
            <InputTitle>Težina kg</InputTitle>
            <Input
              onChange={(e) => setProductWeight(e.target.value)}
              placeholder=""
            />
          </FormSection>
          <Button variant="primary">Dodaj</Button>
        </Form>
      </Container>
    </BoxPop>
  );
};

const Container = styled.div``;
const FormSection = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  margin-top: ${(props) => props.theme.space[5]};
`;
const InputTitle = styled.h5`
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export default AddProduct;
