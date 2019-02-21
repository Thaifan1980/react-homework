import React from "react";

import Container from "../Container/Container";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

import ProductsService from "../../service/product.service";
import HeaderBig from "../Headers/HeaderBig";
import HeaderSmall from "../Headers/HeadeSmall";

const IndexPage = () => {
  const categories = ProductsService.getUniqueCategory();
  return (
    <Container>
      <HeaderBig>Welcome to our store</HeaderBig>
      {categories.map(category => (
        <div key={category}>
          <HeaderSmall>{category}</HeaderSmall>
          <ProductsContainer category={category} amount={"4"} />
        </div>
      ))}
    </Container>
  );
};

export default IndexPage;
