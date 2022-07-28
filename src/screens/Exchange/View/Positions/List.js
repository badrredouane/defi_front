import React from "react";
import { useAuth } from "@micro-stacks/react";
import { Col } from "antd";
import { useBalances } from "shared/contexts/Balances";
import PositionList from "shared/components/stories/List";
import Notification from "shared/components/stories/Notification";
import { BsInfoLg } from "react-icons/bs";
import { COLORS } from "shared/style/colors";

const Renders = ({ isSignedIn, hasToken }) => ({
  [!isSignedIn]: () => (
    <div className="center--content">
      <Notification
        text={"To open position please connect your wallets"}
        color={"info"}
        icon={<BsInfoLg size={20} color={COLORS.C_BLACK} />}
      />
    </div>
  ),
  [isSignedIn && !hasToken]: () => (
    <div className="center--content">
      <Notification
        text={"To open position please fund your wallets"}
        color={"info"}
        icon={<BsInfoLg size={20} color={COLORS.C_BLACK} />}
      />
    </div>
  ),
  [isSignedIn && hasToken]: Positions,
});

const Positions = () => {
  return (
    <Col
      xs={{ span: 24, order: 2 }}
      sm={{ span: 24, order: 2 }}
      md={{ span: 24, order: 1 }}
      lg={22}
    >
      <PositionList />
    </Col>
  );
};

const Create = () => {
  const { tokenBalance } = useBalances();
  const { isSignedIn } = useAuth();
  const hasToken = tokenBalance > 0;
  console.log(
    "Renders({ isSignedIn, hasToken })",
    isSignedIn && !hasToken,
    Renders({ isSignedIn, hasToken })
  );
  const Render = Renders({ isSignedIn, hasToken })[true];

  return <Render />;
};

export default Create;
