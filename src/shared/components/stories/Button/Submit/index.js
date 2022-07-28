import React from "react";
import PropTypes from "prop-types";

const STYLE = [
  "btn--primary",
  "btn--second",
  "btn--green",
  "btn--danger",
  "btn--link",
  "btn--disabled",
];

const SIZES = ["btn--xsmall","btn--small", "btn--medium", "btn--large", "btn--max"];

const Submit = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  disabled = false,
  custom = "",
  ...rest
}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[2];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[2];

  return (
    <div className="btn--wrap">
      <button
        className={
          `button--submit ${checkButtonSize} ${custom} ` +
          (disabled ? " btn--disabled " : checkButtonStyle)
        }
        onClick={onClick}
        type={type}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

Submit.propTypes = {
  title: PropTypes.string,
  buttonStyle: PropTypes.string,
};

Submit.defaultProps = {
  title: "Hello",
  buttonStyle: "btn--primary",
};

export default Submit;
