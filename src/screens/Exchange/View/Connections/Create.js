import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/components/Button";
import { SCREENS } from "utils/constants";

const Create = () => {
  const navigate = useNavigate();
  return (
    <Button
      type={"submit"}
      buttonStyle={"btn--second"}
      buttonSize={"btn--xlarge"}
      onClick={() => navigate(SCREENS.CONNECTIONS.CREATE)}
    >
      <span>{"Connect to Tali"}</span>
    </Button>
  );
};

export default Create;
