import React from "react";
import HeaderInput from "shared/components/HeaderInput";
import SimpleInput from "shared/components/Input/Large";

const NewPosition = ({elements = []}) => {
  return (
    <div className={"position--input"}>
      
      <HeaderInput />
      <SimpleInput elements={elements} />

    </div>
  );
};

export default NewPosition;
