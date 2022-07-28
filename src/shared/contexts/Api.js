import React, { createContext, useState, useContext, useEffect } from "react";
import Api from "utils/api";

const Context = createContext("apiClients");

export const Consumer = Context.Consumer;

export default ({ children }) => {
  const [client, setClient] = useState(null);
  const [fetcher, setFetcher] = useState(null);
  useEffect(() => {
    setFetcher(Api(client));
  }, [client]);

  return (
    <Context.Provider value={{ client, setClient, fetcher }}>
      {children}
    </Context.Provider>
  );
};

export const useApi = () => useContext(Context);
