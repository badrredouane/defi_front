import React, { useMemo } from "react";

import PropTypes from "prop-types";

import Alert from "./Alert";
import Toaster from "./Toaster";

const TYPE = {
  alert: Alert,
  toaster: Toaster,
};

const Notification = ({ type, ...props }) => {
  const View = useMemo(() => TYPE[type], [type]);
  return <View {...props} />;
};

Notification.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPE)),
};

Notification.defaultProps = {
  type: "alert",
};

export default Notification;
