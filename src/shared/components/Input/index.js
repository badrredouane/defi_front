import React, { useMemo } from "react";

import PropTypes from "prop-types";

import Simple from "./Simple";
import Large from "./Large";
import Search from "./Search";

const TYPE = {
  simple: Simple,
  large: Large,
  search: Search,
};

const Input = ({ type, ...props }) => {
  const View = useMemo(() => TYPE[type], [type]);
  return <View {...props} />;
};

Input.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPE)),
};

Input.defaultProps = {
  type: "simple",
};

export default Input;
