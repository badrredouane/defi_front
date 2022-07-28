import React from "react";
import Box from "shared/components/Box";
import PropTypes from "prop-types";

const Statistics = ({ items }) => {
  return (
    <>
    {items.map(({ id, icon, label,value }) => (
      <Box type={'linear'} key={`s:${id}`}>
        <div className="statistics--area">
          <div className="statistics--area--head">
            <i>{icon}</i>
            <span>{label}</span>
          </div>
          <div className="statistics--area--body">
            <h4>{value}</h4>
          </div>
        </div>
      </Box>
      ))}
    </>

    );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

Statistics.defaultProps = {
  items: {
    id: "001",
    label: "Cosmos Total",
    value: "1002293.00 M",
    icon: "icon",
  },
};

export default Statistics;
