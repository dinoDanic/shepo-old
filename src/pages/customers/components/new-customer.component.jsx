import React, { useState } from "react";
import styled from "styled-components";

import BoxPop from "../../../components/ui/box-pop/box-pop.component";
import Title from "../../../structure/theme/typography/title.typography";
import Input from "../../../components/ui/input/input.component";
import Button from "../../../components/ui/button/button.conponent";

const NewCustomer = ({ setShowCustomer }) => {
  const [showOffice, setShowOffice] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <BoxPop setLayer={setShowCustomer}>
      <Container>
        <Title>Novi Kupac</Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FormSection>
              <InputTitle>Naziv</InputTitle>
              <Input placeholder="" />
            </FormSection>
            <FormSection>
              <InputTitle>Adresa</InputTitle>
              <Input placeholder="" />
            </FormSection>
          </Row>

          <Button>Dodaj Poslovnicu</Button>
          <ButtonContainer>
            <Button variant="primary">Dodaj Kupca</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </BoxPop>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const FormSection = styled.div`
  margin-bottom: 10px;
  flex: 0.49;
`;
const Form = styled.form`
  margin-top: ${(props) => props.theme.space[5]};
`;
const InputTitle = styled.h5`
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
export default NewCustomer;
