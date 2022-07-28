import React from "react";
import PropTypes from "prop-types";

const Description = ({ items }) => {
  return (
    <div className={"description--wrap"}>
      {items.map(({ id, label, type, value }) => (
        <div className={`description--wrap--item`} key={`desc:${id}`}>
          <span className="label">{label}</span>
          <span className={`value ${type}`}>{value}</span>
        </div>
      ))}
    </div>
  );
};

Description.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

Description.defaultProps = {
  items: {
    key: "001",
    label: "Last Price",
    value: "0,3981",
    type: "green",
  },
};

export default Description;
