import React from "react";
import Box from "shared/components/stories/Box";
import ShortLong from "shared/components/stories/ShortLong";
import Button from "shared/components/stories/Button";
import { Spin } from "antd";
import PositionInput from "shared/components/stories/PositionInput";

const Create = () => {
  const [loading] = React.useState(false);
  return (
    <Box>
      <ShortLong />
      <PositionInput />
      <Button
        type={"submit"}
        buttonSize={"btn--large"}
        disabled={loading || "positionStatus"}
      >
        {loading ? <Spin /> : <span>{"Open position"}</span>}
      </Button>
    </Box>
  );
};

export default Create;
