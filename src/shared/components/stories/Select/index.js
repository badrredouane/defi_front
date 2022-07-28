import React, { useMemo } from "react";

import PropTypes from "prop-types";

import Simple from "./Simple";
import SelectOption from "./SelectOption";

const TYPE = {
  simple: Simple,
  selectOption : SelectOption,
};

const Component = ({ type, ...props }) => {
  const View = useMemo(() => TYPE[type], [type]);
  return <View {...props} />;
};

Component.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPE)),
};

Component.defaultProps = {
  type: "simple",
};

export default Component;
