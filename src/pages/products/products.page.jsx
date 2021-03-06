import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase.utils";
import styled, { css } from "styled-components";

import Header from "../../components/header/header.component";
import SearchBar from "../orders/components/search-bar.component";
import Button from "../../components/ui/button/button.conponent";
import AddProduct from "../../components/add-product/add-product.component";
import Product from "./product/product.component";
import Bar from "../../components/ui/bar/bar.component";

const ProductsPage = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .orderBy("created", "asc")
      .onSnapshot((products) => {
        let list = [];
        products.forEach((product) => {
          list.push(product.data());
        });
        setProducts(list);
      });
  }, []);

  return (
    <Container>
      <Header title="Proizvodi" />
      <FnBar>
        <SearchBar />
        <Button onClick={() => setShowAddProduct(true)}>Novi Proizvod</Button>
      </FnBar>
      <Bar variant="main">
        <Customer>Šifra</Customer>
        <Poslovnica>Naziv</Poslovnica>
        <OrderId>Težina</OrderId>
      </Bar>
      {products.map((product) => (
        <Product product={product} />
      ))}
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
    </Container>
  );
};

const Container = styled.div``;

const FnBar = styled.div`
  display: flex;
`;

const ItemsShared = css`
  flex: 1;
  min-width: 100px;
`;
const Customer = styled.div`
  ${ItemsShared}
`;
const Poslovnica = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;
const OrderId = styled.div`
  ${ItemsShared}
  display: flex;
  justify-content: center;
`;

export default ProductsPage;
