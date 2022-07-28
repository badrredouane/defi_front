import React from "react";
import { Input } from "@chakra-ui/react";

const MultiOption = () => {
  return (
    <div className="input--group">
      <label>From</label>
      <div className="input--group--content">
        <Input placeholder="0,0000" htmlSize={12} width="auto" />
        <span>$0.00</span>
      </div>
    </div>
  );
};

export default MultiOption;
