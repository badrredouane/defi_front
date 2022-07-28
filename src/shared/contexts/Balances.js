import React, { createContext, useState, useContext, useEffect } from "react";
import { useAccount } from "@micro-stacks/react";
import { fetchAccountBalances } from "micro-stacks/api";
import { get } from "lodash";
import { FUNGIBLE_TOKEN_IDS, NETWORK } from "utils/constants";

const Context = createContext("balances");

export const Consumer = Context.Consumer;

export default ({ children }) => {
  const { stxAddress } = useAccount();
  const [tokenBalance, setTokenBalance] = useState(0);
  useEffect(() => {
    const fetchBalances = async () => {
      const balances = await fetchAccountBalances({
        url: NETWORK.coreApiUrl,
        principal: stxAddress,
      });
      setTokenBalance(
        get(balances, `fungible_tokens.${FUNGIBLE_TOKEN_IDS.TUSD}.balance`, 0)
      );
    };
    fetchBalances();
  }, []);

  return (
    <Context.Provider value={{ tokenBalance }}>{children}</Context.Provider>
  );
};

export const useBalances = () => useContext(Context);
