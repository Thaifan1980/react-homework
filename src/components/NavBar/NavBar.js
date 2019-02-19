import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

import "./NavBar.scss";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Container>
          <ul className="nav">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </Container>
      </nav>
    );
  }
}

NavBar.propTypes = {
  name: PropTypes.string
};

export default NavBar;
