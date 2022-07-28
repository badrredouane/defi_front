import { Segmented } from "antd";
import React from "react";
import PropTypes from "prop-types";

const Filter = ({ items = [] }) => {
  return <Segmented size="large" className="custom--filter" options={items} />;
};

Filter.propTypes = {
  items: PropTypes.array
};

Filter.defaultProps = {
  items: ['Active', 'Inactive']
};

export default Filter;
