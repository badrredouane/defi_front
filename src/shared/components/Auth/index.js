import { useAuth, useAccount } from "@micro-stacks/react";
import Button from "shared/components/Button";
import Dollar from "shared/assets/images/dollar--large.png";
import { BsFillCircleFill } from 'react-icons/bs';
import { COLORS } from "shared/style/colors";

export default function Auth() {
  const { authenticate, signOut, isSignedIn } = useAuth();
  const { stxAddress } = useAccount();

  if (isSignedIn)
    return (
      <Button
        icon={<img src={Dollar} alt={"dollar"} />}
        type={"withIcon"}
        title={stxAddress}
        onClick={signOut}
      />
    );

  return (
    <Button
      icon={<BsFillCircleFill color={COLORS.C_RED} size={10} />}
      type={"withIcon"}
      title="Connect Wallet"
      onClick={authenticate}
    />
  );
}
