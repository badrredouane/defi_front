import React from "react";
import Button from "shared/components/Button";
import InputCustom from "shared/components/Input/Simple";
import PropTypes from "prop-types";
import { BsInfoLg } from "react-icons/bs";
import { COLORS } from "shared/style/colors";

const Alert = ({icon, text, color}) => {
  return (
    <div className={`alert--wrapper alert--color--${color}`}>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </div>
  );
};

Alert.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};

Alert.defaultProps = {
  icon: <BsInfoLg size={20} color={COLORS.C_BLACK} />,
  text: 'Hello',
  color: 'info',
};


export default Alert;
