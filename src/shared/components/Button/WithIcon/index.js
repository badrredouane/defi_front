import React from "react";
import MiddleEllipsis from "shared/hooks/ellips";

const Button = ({ onClick, icon, title }) => {
  return (
    <>
      <div className={`button--withIcon`} onClick={onClick}>
        {icon && <span className="icon">{icon}</span>}
        <div className="ellips--wrap">
          <MiddleEllipsis>
            <span className="label">{title}</span>
          </MiddleEllipsis>
        </div>
      </div>
    </>
  );
};

export default Button;
