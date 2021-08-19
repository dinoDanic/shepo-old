import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/header/header.component";
import IconCard from "../../components/ui/icon-card/icon-card.component";
import Products from "../products/products.page";

const DbPage = () => {
  return (
    <Container>
      <Header title="Baza" />
      <CardContainer>
        <Link to="db/products">
          <IconCard icon="faShapers" text="Proizvodi" />
        </Link>
        <IconCard icon="faBriefcase" text="Kupci" />
      </CardContainer>
    </Container>
  );
};

const Container = styled.div``;
const CardContainer = styled.div`
  display: flex;
`;
const ProductsList = styled.div``;

export default DbPage;
