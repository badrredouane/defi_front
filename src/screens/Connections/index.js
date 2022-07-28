import { SCREENS } from "utils/constants";
import List from "./List";
import Create from "./Create";

export default [
  {
    path: SCREENS.CONNECTIONS.LIST,
    exact: true,
    element: <List />,
  },
  {
    path: SCREENS.CONNECTIONS.CREATE,
    exact: true,
    element: <Create />,
  },
];
