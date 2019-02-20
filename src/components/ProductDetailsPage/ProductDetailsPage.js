import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Container from "../Container/Container";
import Header from "../Headers/Header";

import ProductsService from "../../service/product.service";

import "./ProductDetailsPage.scss";

const ProductDetailsPage = props => {
  const productId = props.match.params.id;
  const product = ProductsService.getProductById(productId);

  if (!product) {
    return <Redirect to="/catalog" />;
  }

  return (
    <Container>
      <Header>Product detail</Header>

      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <Header type="small">{product.name}</Header>
        <p>${product.amount}</p>
      </div>

      <button type="button" className="btn" onClick={props.history.goBack}>
        Back to list
      </button>
    </Container>
  );
};

ProductDetailsPage.propTypes = {
  match: PropTypes.object
};

export default ProductDetailsPage;
