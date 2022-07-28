import { API_PATHS } from "utils/constants";

const getAll = (client) => async () => {
  const { Offers: offers = [] } = await client.send(
    API_PATHS.RPC.CONTRACTS.LIST
  );
  return offers;
};
const offers = (client) => ({ getAll: getAll(client) });

export default offers;
