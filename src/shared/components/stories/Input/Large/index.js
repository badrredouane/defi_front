import React from "react";
import Button from "shared/components/Button";
import InputCustom from "shared/components/Input/Simple";

const Large = () => {
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

export default Large;
