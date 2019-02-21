import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Container from "../Container/Container";

import ProductsService from "../../service/product.service";

import "./ProductDetailsPage.scss";
import HeaderSmall from "../Headers/HeadeSmall";
import HeaderBig from "../Headers/HeaderBig";

const ProductDetailsPage = props => {
  const productId = props.match.params.id;
  const product = ProductsService.getProductById(productId);

  if (!product) {
    return <Redirect to="/catalog" />;
  }

  return (
    <Container>
      <HeaderBig>Product detail</HeaderBig>

      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <HeaderSmall>{product.name}</HeaderSmall>
        <p>${product.amount}</p>
        <button type="button" className="btn" onClick={props.history.goBack}>
          Back to products
        </button>
      </div>
    </Container>
  );
};

ProductDetailsPage.propTypes = {
  match: PropTypes.object
};

export default ProductDetailsPage;
