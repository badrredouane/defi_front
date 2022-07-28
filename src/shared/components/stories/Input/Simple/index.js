import { Input } from "antd";
import React from "react";
import PropTypes from "prop-types";

const InputCustom = ({ label, placeholder, ...rest }) => {
  return (
    <div className="input--transparent">
      <Input placeholder={placeholder} {...rest} />
      <span>{label}</span>
    </div>
  );
};

InputCustom.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

InputCustom.defaultProps = {
  label: "tSTX",
  placeholder: "0.0",
};

export default InputCustom;
