import React, { FC } from "react";
import styled from "styled-components";

import BoxPop from "../ui/box-pop/box-pop.component";
import Input from "../ui/input/input.component";

import Title from "../../structure/theme/typography/title.typography";
import Button from "../ui/button/button.conponent";

const AddProduct = ({ setShowAddProduct }) => {
  return (
    <BoxPop setShowAddProduct={setShowAddProduct}>
      <Container>
        <Title>Dodaj Proizvod</Title>
        <Form>
          <FormSection>
            <InputTitle>Šifra Proizvoda</InputTitle>
            <Input placeholder="" />
          </FormSection>
          <FormSection>
            <InputTitle>Naziv proizvoda</InputTitle>
            <Input placeholder="" />
          </FormSection>
          <FormSection>
            <InputTitle>Težina</InputTitle>
            <Input placeholder="" />
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
`;

export default AddProduct;
