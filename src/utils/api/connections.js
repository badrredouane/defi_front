import { API_PATHS } from "utils/constants";

const getAll = (client) => async () => {
  const { Connections: connections = [] } = await client.send(
    API_PATHS.RPC.CONNECTIONS.LIST
  );
  return connections;
};

const create =
  (client) =>
  ({ address }) =>
    client.send(API_PATHS.RPC.CONNECTIONS.CREATE, { LNAddr: address });

const connections = (client) => ({
  getAll: getAll(client),
  create: create(client),
});

export default connections;
