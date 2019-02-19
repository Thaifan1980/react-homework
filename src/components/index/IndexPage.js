import React from "react";
import PropTypes from "prop-types";

import Container from "../Container/Container";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import Header from "../Headers/Header";

import ProductsService from "../../service/product.service";

const IndexPage = () => {
  const categories = ProductsService.getUniqueCategory();
  return (
    <Container>
      <Header>Welcome to our store</Header>
      {categories.map(category => (
        <div key={category}>
          <Header type="small">{category}</Header>
          <ProductsContainer category={category} amount={"4"} />
        </div>
      ))}
    </Container>
  );
};

IndexPage.propTypes = {
  name: PropTypes.string
};

export default IndexPage;
