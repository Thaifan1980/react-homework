import React from "react";

import PropTypes from "prop-types";

import "./HeaderSmall.scss";

const HeaderSmall = props => {
  return <h2 className="header-small">{props.children}</h2>;
};

HeaderSmall.propTypes = {
  children: PropTypes.string
};

export default HeaderSmall;
