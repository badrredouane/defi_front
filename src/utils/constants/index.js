import { StacksTestnet } from "micro-stacks/network";

export const API_PATHS = {
  RPC: {
    CONTRACTS: {
      LIST: "LitRPC.ListContracts",
      CREATE: "LitRPC.NewContract",
      UPDATE: {
        ORACLE: "LitRPC.SetContractOracle",
        R: "LitRPC.SetContractRPoint",
        SETTLEMENT_TIME: "LitRPC.SetContractSettlementTime",
        DATA_FEED: "LitRPC.SetContractDatafeed",
        FUNDING: "LitRPC.SetContractFunding",
        DIVISION: "LitRPC.SetContractDivision",
        COIN_TYPE: "LitRPC.SetContractCoinType",
      },
      OFFER: "LitRPC.OfferContract",
    },
    OFFERS: {
      LIST: "LitRPC.ListOffers",
    },
    CONNECTIONS: {
      LIST: "LitRPC.ListConnections",
      CREATE: "LitRPC.Connect",
    },
  },
  REST: {},
};

export const SCREENS = {
  CONTRACTS: {
    LIST: "/contracts",
    OFFER: "/contracts/offer",
  },
  CONNECTIONS: {
    LIST: "/connections",
    CREATE: "/connections/create",
  },
  UI: "/ui",
  EXCHANGE: "/exchange",
  DASHBOARD: "/",
 
};

export const ORACLES = [
  {
    name: "local-oracle",
    url: "http://127.0.0.1:3010",
    id: 4,
    A: "02fa416d3c01a7b4fb1d6c391bcd88342971f074d781a2355dffc4ec7c22612b08",
  },
];

export const CONTRACT_STATUS_IDS = {
  DRAFT: 0,
  OFFERED_TO_PEER: 1,
  OFFERED_BY_PEER: 2,
  DECLINED: 3,
  ACCEPTED: 4,
  ACKNOWLEDGED: 5,
  ACTIVE: 6,
  SETTLING: 7,
  CLOSEd: 8,
  ERROR: 9,
  ACCEPTING: 10,
};

export const CONTRACT_STATUSES = {
  [CONTRACT_STATUS_IDS.DRAFT]: "Draft",
  [CONTRACT_STATUS_IDS.OFFERED_TO_PEER]: "Offered to Peer",
  [CONTRACT_STATUS_IDS.OFFERED_BY_PEER]: "Offered by Peer",
  [CONTRACT_STATUS_IDS.DECLINED]: "Declined",
  [CONTRACT_STATUS_IDS.ACCEPTED]: "Accepted",
  [CONTRACT_STATUS_IDS.ACKNOWLEDGED]: "Acknowledged",
  [CONTRACT_STATUS_IDS.ACTIVE]: "Active",
  [CONTRACT_STATUS_IDS.SETTLING]: "Settling",
  [CONTRACT_STATUS_IDS.CLOSEd]: "Closed",
  [CONTRACT_STATUS_IDS.ERROR]: "Error",
  [CONTRACT_STATUS_IDS.ACCEPTING]: "Accepting",
};

export const CONTRACT_STATUSES_COLORS = {
  [CONTRACT_STATUS_IDS.DRAFT]: "magenta",
  [CONTRACT_STATUS_IDS.OFFERED_TO_PEER]: "orange",
  [CONTRACT_STATUS_IDS.OFFERED_BY_PEER]: "blue",
  [CONTRACT_STATUS_IDS.DECLINED]: "green",
  [CONTRACT_STATUS_IDS.ACCEPTED]: "cyan",
  [CONTRACT_STATUS_IDS.ACKNOWLEDGED]: "gray",
  [CONTRACT_STATUS_IDS.ACTIVE]: "#f50",
  [CONTRACT_STATUS_IDS.SETTLING]: "#2db7f5",
  [CONTRACT_STATUS_IDS.CLOSEd]: "#108ee9",
  [CONTRACT_STATUS_IDS.ERROR]: "#87d068",
  [CONTRACT_STATUS_IDS.ACCEPTING]: "gold",
};

const STACK_API_URL = "http://localhost:3999";
export const NETWORK = new StacksTestnet({
  coreApiUrl: STACK_API_URL,
});

export const FUNGIBLE_TOKEN_IDS = {
  TUSD: "ST3692NGYYKQ4JJYJBNXH9Q2RYNMSYJJ3FBR7TDQP.tlx-stable-coin::t-usd",
};

export const FUNGIBLE_TOKEN_NAMES = {
  [FUNGIBLE_TOKEN_IDS.TUSD]: "tUSD",
};

export const GO_BACKS = {
  ONE: -1,
  TWO: -2,
};

export const PAGINATION_PARAMS = ['take', 'skip'];

export const MERGEABLE_LISTS = {
  CLAIM_RESPONSES: 'claimResponses',
  ENCOUNTERS: 'encounters',
  RELATED_PERSONS: 'relatedPersons',
};

export const DEFAULT_ORDER_BY = [{ createdDate: 'desc' }];

