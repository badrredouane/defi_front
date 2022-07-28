import React from "react";
import Button from "shared/components/Button";
import { useNavigate } from "react-router-dom";
import { SCREENS } from "utils/constants";

const Create = () => {
  const navigate = useNavigate();

  return (
    <Button
      type={"submit"}
      onClick={() => navigate(SCREENS.CONTRACTS.OFFER)}
      buttonStyle={"btn--primary"}
      buttonSize={"btn--xlarge"}
    >
      <span>{"Lock your bitcoins for $"}</span>
    </Button>
  );
};

export default Create;
