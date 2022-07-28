import React, { useMemo } from "react";

import PropTypes from "prop-types";

import Process from "./Process";
import Service from "./Service";

const TYPE = {
  service: Service,
  process: Process,
};

const Card = ({ type, ...props }) => {
  const View = useMemo(() => TYPE[type], [type]);
  return <View {...props} />;
};

Card.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPE)),
};

Card.defaultProps = {
  type: "service",
};

export default Card;
