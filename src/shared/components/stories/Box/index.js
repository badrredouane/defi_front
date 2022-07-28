import React from "react";

const Box = ({ children, blur }) => {
  const blurBox = blur ? "box--blur" : "";

  return (
    <div className={`box--wrap`}>
      <div className={`${blurBox} `}></div>
      {children}
    </div>
  );
};

export default Box;
