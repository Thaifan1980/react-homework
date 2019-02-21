import React from "react";

import PropTypes from "prop-types";

import "./HeaderBig.scss";

const HeaderBig = props => {
  return <h1 className="header-big">{props.children}</h1>;
};

HeaderBig.propTypes = {
  children: PropTypes.string
};

export default HeaderBig;
