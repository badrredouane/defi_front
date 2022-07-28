import { ApolloProvider } from "@apollo/client";
import { ClientProvider } from "@micro-stacks/react";
import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import ApiProvider from "shared/contexts/Api";
import BalancesProvider from "shared/contexts/Balances";
import client from "shared/graphql";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./shared/style/style.scss";
// @ts-ignore

const authOptions = {
  appDetails: {
    name: "Catamaran Swaps",
    icon: "https://catamaranswaps.org/android-icon-192x192.png",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
    <HashRouter>
      <ClientProvider
        appName={authOptions.appDetails.name}
        appIconUrl={authOptions.appDetails.icon}
      >
        <ApiProvider>
          <BalancesProvider>
            <App />
          </BalancesProvider>
        </ApiProvider>
      </ClientProvider>
    </HashRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
