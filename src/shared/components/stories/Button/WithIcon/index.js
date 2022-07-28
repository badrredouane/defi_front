import React from "react";

const Button = ({ onClick, icon, title }) => {
  return (
    <div className={`button--withIcon`} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      <span className="label">{title}</span>
    </div>
  );
};

export default Button;
