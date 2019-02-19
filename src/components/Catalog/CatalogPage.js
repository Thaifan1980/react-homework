import React from "react";
import PropTypes from "prop-types";

import Container from "../Container/Container";
import Header from "../Headers/Header";

import FilterComponent from "../FilterComponent/FilterComponent";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

import "./CatalogPage.scss";

class CatalogPage extends React.Component {
  constructor() {
    super();
    this.state = { productName: "", productManufacture: "" };
  }

  render() {
    return (
      <Container>
        <Header>Catalog</Header>
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

CatalogPage.propTypes = {
  name: PropTypes.string
};

export default CatalogPage;
