import React from "react";
import Button from "../Button";
import InputCustom from "../Input/Simple";

const PositionInput = () => {
  return (
    <div className={"position--input"}>
      <div className={"position--input--head"}>
        <span>
          Amount —<small>Set order size</small>
        </span>

        <Button
          type={"submit"}
          buttonStyle={"btn--link"}
          buttonSize={"btn--xsmall"}
        >
          Max
        </Button>
      </div>

      <div className="position--input--values">
        <div className="item">
          <InputCustom placeholder={"0.0"} label={"tSTX"} />
        </div>
        <div className="divider" />
        <div className="item">
          <InputCustom placeholder={"0.0"} label={"tUSD"} />
        </div>
      </div>
    </div>
  );
};

export default PositionInput;
