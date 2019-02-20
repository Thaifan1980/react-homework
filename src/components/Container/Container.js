import React from "react";

import PropTypes from "prop-types";

import "./Container.scss";

const Container = props => {
  return <div className="container">{props.children}</div>;
};

Headers.propTypes = {
  children: PropTypes.object
};

export default Container;
