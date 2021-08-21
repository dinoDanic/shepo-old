import React, { useState } from "react";
import styled from "styled-components";

import { createCustomer } from "../../../firebase/firebase.functions";

import BoxPop from "../../../components/ui/box-pop/box-pop.component";
import Title from "../../../structure/theme/typography/title.typography";
import Input from "../../../components/ui/input/input.component";
import Button from "../../../components/ui/button/button.conponent";

const NewCustomer = ({ setShowCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [customerAdress, setCustomerAdress] = useState("");
  const [officeTitle, setOfficeTitle] = useState("");
  const [officeAdress, setOfficeAdress] = useState("");
  const [office, setOffice] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerName === "") {
      alert("ime kupca je obavezno");
      return;
    }
    try {
      createCustomer(customerName, customerAdress, office);
    } catch (err) {
      console.log(err);
    } finally {
      setShowCustomer(false);
    }
  };
  const handleAddOffice = (e) => {
    e.preventDefault();
    const newOffice = {
      name: officeTitle,
      adress: officeAdress,
    };
    if (officeTitle === "") {
      alert("ime poslovnice je obavezno");
      return;
    }
    setOffice([...office, newOffice]);
    setOfficeTitle("");
    setOfficeAdress("");
  };
  console.log(office);
  return (
    <BoxPop setLayer={setShowCustomer}>
      <Title>Novi Kupac</Title>
      <Container>
        <Row>
          <SubTitle>Info</SubTitle>
          <Form onSubmit={handleSubmit}>
            <FormSection>
              <InputTitle>Naziv</InputTitle>
              <Input
                placeholder="Bauhaus.."
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </FormSection>
            <FormSection>
              <InputTitle>Adresa</InputTitle>
              <Input
                placeholder="Vlaška 1.."
                onChange={(e) => setCustomerAdress(e.target.value)}
              />
            </FormSection>
            <ButtonContainer>
              <Button variant="primary">Dodaj Kupca</Button>
            </ButtonContainer>
          </Form>
        </Row>
        <Row>
          <SubTitle>Poslovnice</SubTitle>
          <Office>
            <Form onSubmit={(e) => handleAddOffice(e)}>
              <FormSection>
                <InputTitle>Naziv</InputTitle>
                <Input
                  value={officeTitle}
                  placeholder=""
                  onChange={(e) => setOfficeTitle(e.target.value)}
                />
              </FormSection>
              <FormSection>
                <InputTitle>Adresa</InputTitle>
                <Input
                  value={officeAdress}
                  placeholder=""
                  onChange={(e) => setOfficeAdress(e.target.value)}
                />
              </FormSection>
              <Button>Dodaj</Button>
            </Form>
            {office.length > 0 && (
              <>
                {office.map((o, index) => (
                  <OfficeMap>
                    {index + 1}. {o.name} {o.adress}
                  </OfficeMap>
                ))}
              </>
            )}
          </Office>
        </Row>
      </Container>
    </BoxPop>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: ${(props) => props.theme.space[5]};
`;
const Row = styled.div``;
const FormSection = styled.div`
  margin-bottom: 10px;
  flex: 0.49;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Form = styled.form``;
const InputTitle = styled.h5`
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: ${(props) => props.theme.space[11]};
  right: 0;
`;
const Office = styled.div``;
const OfficeMap = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[3]};
`;
const SubTitle = styled.h4`
  border-bottom: 1px solid ${(props) => props.theme.colors.brand.bodyGray};
  padding-bottom: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export default NewCustomer;
