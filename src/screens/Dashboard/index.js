import { SCREENS } from "utils/constants";

import View from "./View";

export default [
  {
    path: SCREENS.DASHBOARD,
    exact: true,
    element: <View />,
  },
];
