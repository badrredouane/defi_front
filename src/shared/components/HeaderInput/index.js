import React from "react";
import Button from "shared/components/Button";

const HeaderInput = () => {
  return (
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
  );
};

export default HeaderInput;
