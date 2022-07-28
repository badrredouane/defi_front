import React, { useMemo } from "react";

import PropTypes from "prop-types";

import Simple from "./Simple";
import WithIcon from "./WithIcon";
import Submit from "./Submit";

const TYPE = {
  withIcon: WithIcon,
  simple: Simple,
  submit: Submit,
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
