import React from "react";
import Button from "shared/components/Button";
import SimpleInput from "shared/components/Input/Simple";

const Large = ({ elements = [] }) => {
  const [input_1, input_2] = elements;
  return (
      <div className="position--input--values">
        <div className="item">
          <SimpleInput
            value={input_1.value}
            placeholder={"0.0"}
            label={input_1.label}
            disabled={input_1?.disabled}
          />
        </div>
        <div className="divider" />
        <div className="item">
          <SimpleInput
            value={input_2.value}
            placeholder={"0.0"}
            label={input_2.label}
            disabled={input_2?.disabled}
          />
        </div>
      </div>
  );
};

export default Large;
