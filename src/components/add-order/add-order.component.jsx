import React from "react";
import styled from "styled-components";
import BoxPop from "../ui/box-pop/box-pop.component";

import Title from "../../structure/theme/typography/title.typography";
import Input from "../ui/input/input.component";

const AddOrder = ({ setLayer }) => {
  return (
    <BoxPop setLayer={setLayer}>
      <Title>Nova Narudžba</Title>
      <Form>
        <Section>
          <Name>Kupac</Name>
          <Select />
        </Section>
        <Section>
          <Name>Broj narudžbe</Name>
          <Input />
        </Section>
        <Section>
          <Name>Datum narudžbe</Name>
          <Input type="date" />
        </Section>
        <Section>
          <Name>Datum isporuke</Name>
          <Input type="date" />
        </Section>
      </Form>
    </BoxPop>
  );
};

const Form = styled.form``;
const Section = styled.div`
  width: 50%;
  margin-bottom: ${(props) => props.theme.space[4]};
`;
const Name = styled.div`
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const Select = styled.select``;

export default AddOrder;
