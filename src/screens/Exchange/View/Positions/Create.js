import React from "react";
import { useAuth } from "@micro-stacks/react";
import Box from "shared/components/Box";
import ShortLong from "shared/components/ShortLong";
import Button from "shared/components/Button";
import { useBalances } from "shared/contexts/Balances";
import NewPosition from "shared/components/NewPosition";

const Create = () => {
  const { tokenBalance } = useBalances();
  const { isSignedIn } = useAuth();
  const hasToken = tokenBalance > 0;

  return (
    <Box blur>
      <ShortLong />
      <NewPosition 
        elements={[
          { label: "tSTX", value: 0 },
          { label: "tUSD", value: 0 },
        ]}
      />
      <Button
        type={"submit"}
        buttonSize={"btn--large"}
        disabled={hasToken || isSignedIn}
      >
        <span>{"Open position"}</span>
      </Button>
    </Box>
  );
};

export default Create;
