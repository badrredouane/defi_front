import React from "react";
import Header from "./Header";

export default ({ menu, actions, children }) => {
  return (
    <main className="layout">
      <Header menu={menu} actions={actions} />
      {children}
    </main>
  );
};
