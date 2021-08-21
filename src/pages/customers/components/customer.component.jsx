import React from "react";
import styled from "styled-components";

import Bar from "../../../components/ui/bar/bar.component";

const Customer = ({ customer }) => {
  const { name, address, id } = customer;
  return (
    <Bar>
      <Name>{name}</Name>
      <Adress>{address}</Adress>
      <Id>{id}</Id>
    </Bar>
  );
};

const Name = styled.div``;
const Adress = styled.div``;
const Id = styled.div``;

export default Customer;
