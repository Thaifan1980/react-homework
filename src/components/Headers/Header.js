import React from "react";

import "./Header.scss";

const Headers = props => {
  console.log(props);
  if (props.type === "big") {
    return <h1 className="header-big">{props.children}</h1>;
  } else if (props.type === "small") {
    return <h2 className="header-small">{props.children}</h2>;
  } else return <h1 className="header-big">{props.children}</h1>;
};

export default Headers;