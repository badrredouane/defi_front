import { API_PATHS } from "utils/constants";

const getAll = (client) => async () => {
  const { Contracts: contracts = [] } = await client.send(
    API_PATHS.RPC.CONTRACTS.LIST
  );
  return contracts;
};

const create = (client) => () => client.send(API_PATHS.RPC.CONTRACTS.CREATE);

const update = (client) => ({
  oracle: (contract, oracle) =>
    client.send(API_PATHS.RPC.CONTRACTS.UPDATE.ORACLE, {
      CIdx: parseInt(contract.id),
      OIdx: parseInt(oracle.id, 10),
    }),
  r: (contract, oracle) =>
    client.send(API_PATHS.RPC.CONTRACTS.UPDATE.ORACLE, {
      CIdx: parseInt(contract.id),
      RPoint: oracle.R,
    }),
  settlementTime: ({ id, timestamp }) =>
    client.send(API_PATHS.RPC.CONTRACTS.UPDATE.SETTLEMENT_TIME, {
      CIdx: parseInt(id),
      Time: parseInt(timestamp, 10),
    }),
  dataFeed: (contract, asset) =>
    client.send(API_PATHS.RPC.CONTRACTS.UPDATE.DATA_FEED, {
      CIdx: parseInt(contract.id),
      Feed: parseInt(asset.dataFeed.id, 10),
    }),
  funding: ({ id, funding: { ours, theirs } }) =>
    client.send(API_PATHS.RPC.CONTRACTS.UPDATE.FUNDING, {
      CIdx: parseInt(id),
      OurAmount: ours,
      TheirAmount: theirs,
    }),
  division: ({ id, division: { ours, theirs } }) =>
    client.send(API_PATHS.RPC.CONTRACTS.UPDATE.DIVISION, {
      CIdx: parseInt(id),
      ValueFullyOurs: parseInt(ours, 10),
      ValueFullyTheirs: parseInt(theirs, 10),
    }),
  coinType: ({ id, coinType }) => {
    return client.send(API_PATHS.RPC.CONTRACTS.UPDATE.COIN_TYPE, {
      CIdx: parseInt(id),
      CoinType: parseInt(coinType, 10),
    });
  },
});

const offer = (client) => (contract, peer) =>
  client.send(API_PATHS.RPC.CONTRACTS.OFFER, {
    CIdx: parseInt(contract.id),
    PeerIdx: parseInt(peer.id),
  });

const contracts = (client) => ({
  getAll: getAll(client),
  create: create(client),
  update: update(client),
  offer: offer(client),
});

export default contracts;
