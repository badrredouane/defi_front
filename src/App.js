import { useRoutes, useNavigate } from "react-router-dom";
import cuid from "cuid";
import Client from "utils/api/client";
import { useApi } from "shared/contexts/Api";
import Auth from "shared/components/Auth";
import Balances from "shared/components/Balances";
import Container from "shared/components/Container";
import screens from "screens";
import { useEffect } from "react";
import Layout from "shared/components/Layout";
import { SCREENS } from "utils/constants";

const clients = {
  alice: new Client(
    "127.0.0.1",
    8003,
    () => {},
    () => {},
    () => {}
  ),
  tali: new Client(
    "127.0.0.1",
    8004,
    () => {},
    () => {},
    () => {}
  ),
};

const App = () => {
  const api = useApi();
  const navigate = useNavigate();
  useEffect(() => api.setClient(clients.alice), []);
  const menu = [{ to: SCREENS.EXCHANGE, label: "Dashboard", id: cuid() }];
  const actions = [
    {
      Widget: () => (
        <Balances {...{ onClick: () => navigate(SCREENS.CONTRACTS.OFFER) }} />
      ),
      id: cuid(),
    },
    { Widget: Auth, id: cuid() },
  ];
  return (
      <Layout menu={menu} actions={actions}>
        {useRoutes(screens)}
      </Layout>
  );
};

export default App;
