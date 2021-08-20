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
    <BoxPop w="60" setLayer={setShowAddProduct}>
      <Container>
        <Title>Dodaj Proizvod</Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FormSection>
              <InputTitle>Šifra Proizvoda</InputTitle>
              <Input
                style={{ flex: 0.5 }}
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="557CP"
              />
            </FormSection>
            <FormSection>
              <InputTitle>Naziv proizvoda</InputTitle>
              <Input
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Pečenjara Krović"
              />
            </FormSection>
          </Row>
          <FormSection>
            <InputTitle>Težina</InputTitle>
            <Input
              onChange={(e) => setProductWeight(e.target.value)}
              placeholder="kg"
            />
          </FormSection>
          <ButtonContainer>
            <Button variant="primary">Dodaj Proizvod</Button>
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
const FormSection = styled.div`
  margin-bottom: 10px;
  flex: 0.49;
`;
const Form = styled.form`
  margin-top: ${(props) => props.theme.space[5]};
  height: 100%;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputTitle = styled.h5`
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default AddProduct;
