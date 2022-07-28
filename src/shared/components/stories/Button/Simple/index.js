import React from "react";
import PropTypes from "prop-types";

const MODE = ["primary", "large"];

const Button = ({ mode, link, title, icon }) => {
  const MODE_BUTTON = MODE.includes(mode) ? mode : MODE[1];

  return (
    <>
      <div className={`button ${MODE_BUTTON}`}>
        <div id="circle"></div>
        <a href={link}>
          {icon}
          <span>{title}</span>
        </a>
      </div>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

Button.defaultProps = {
  title: "Hello",
};

export default Button;
