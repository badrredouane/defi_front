import { SCREENS } from "utils/constants";
import List from "./List";
import Offer from "./Offer";

export default [
  {
    path: SCREENS.CONTRACTS.LIST,
    exact: true,
    element: <List />,
  },
  {
    path: SCREENS.CONTRACTS.OFFER,
    exact: true,
    element: <Offer />,
  },
];
