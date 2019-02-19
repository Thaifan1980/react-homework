import React from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container>
          <p>
            Shop © 2020
            <br /> Designed by Andrzej
          </p>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  name: PropTypes.string
};

export default Footer;
