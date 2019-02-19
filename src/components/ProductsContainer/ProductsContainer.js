import React from "react";
import { Link } from "react-router-dom";

import ProductsService from "../../service/product.service";

import "./ProductsContainer.scss";

const ProductsContainer = ({ category, name, manufacture, amount }) => {
  const filtredProducts = ProductsService.getFiltredProducts({
    category,
    name,
    manufacture,
    amount
  });

  return (
    <div className="products">
      {filtredProducts.map(product => (
        <div className="product" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <p>${product.amount}</p>
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
