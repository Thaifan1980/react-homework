import React from "react";

import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

import "./NavBar.scss";

const NavBar = () => {
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
};

export default NavBar;
