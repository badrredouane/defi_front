import { Input } from "antd";
import React from "react";
import PropTypes from "prop-types";

const Toaster = () => {
  return (
    <div className="wrapp">
      hello
    </div>
  );
};

Toaster.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Toaster.defaultProps = {
};

export default Toaster;
