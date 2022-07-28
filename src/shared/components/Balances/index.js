import React from "react";
import Button from "shared/components/Button";
import Dollar from "shared/assets/images/dollar--large.png";
import { useBalances } from "shared/contexts/Balances";

export default function Balances(props) {
  const { tokenBalance } = useBalances();
  return (
    <Button
      icon={<img src={Dollar} alt={"dollar"} />}
      type={"withIcon"}
      title={`Get tUSD (${tokenBalance})`}
      onClick={props.onClick}
    />
  );
}
