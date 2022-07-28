import React, { useMemo } from "react";

import PropTypes from "prop-types";

import Simple from "./Simple";
import Linear from "./Linear";

const TYPE = {
  simple: Simple,
  linear: Linear,
};

const Button = ({ type, ...props }) => {
  const View = useMemo(() => TYPE[type], [type]);
  return <View {...props} />;
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPE)),
};

Button.defaultProps = {
  type: "simple",
};

export default Button;
