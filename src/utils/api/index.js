import offers from "./offers";
import assets from "./assets";
import contracts from "./contracts";
import connections from "./connections";

const api = (client) => ({
  offers: offers(client),
  assets,
  contracts: contracts(client),
  connections: connections(client),
});
export default api;
