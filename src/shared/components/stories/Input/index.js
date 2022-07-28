import React, { useMemo } from "react";

import PropTypes from "prop-types";

import Simple from "./Simple";
import MultiOption from "./MultiOption";
import Large from "./Large";
import Search from "./SearchInput";


const TYPE = {
  simple: Simple,
  multiOption: MultiOption,
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
