import React from "react";
import PropTypes from "prop-types";

const CurrencyBox = ({ icon, title }) => {
  return (
    <div className={"currencyBox--wrap"}>
      {icon && <span className="icon">{icon}</span>}
      <span className="label">{title}</span>
    </div>
  );
};

CurrencyBox.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
};

CurrencyBox.defaultProps = {};

export default CurrencyBox;
