import React from "react";

const Validator = ({ onClick, icon, name }) => {
  return (
    <>
      <div className={`validaor--wrap`} onClick={onClick}>
        {icon && <span className="icon">{icon}</span>}
        <span className="name">{name}</span>
      </div>
    </>
  );
};

export default Validator;
