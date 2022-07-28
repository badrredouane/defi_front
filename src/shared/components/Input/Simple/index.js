import { Input } from "antd";
import React from "react";
import PropTypes from "prop-types";

const Simple = ({ label, placeholder, ...rest }) => {
  return (
    <div className="input--transparent">
      <Input placeholder={placeholder} {...rest} />
      <span>{label}</span>
    </div>
  );
};

Simple.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Simple.defaultProps = {
  placeholder: "",
};

export default Simple;
