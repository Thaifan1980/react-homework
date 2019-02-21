import React from "react";

import Container from "../Container/Container";

import FilterComponent from "../FilterComponent/FilterComponent";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

import "./CatalogPage.scss";
import HeaderBig from "../Headers/HeaderBig";

class CatalogPage extends React.Component {
  constructor() {
    super();
    this.state = { productName: "", productManufacture: "" };
  }

  render() {
    return (
      <Container>
        <HeaderBig>Catalog</HeaderBig>
        <div className="catalog">
          <div className="column-left">
            <FilterComponent
              onTextInputChange={name => {
                this.setState({ productName: name });
              }}
              onRadioButtuonsChange={manufacture => {
                this.setState({ productManufacture: manufacture });
              }}
            />
          </div>

          <div className="column-right">
            <ProductsContainer
              name={this.state.productName}
              manufacture={this.state.productManufacture}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default CatalogPage;
