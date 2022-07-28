import Contracts from "./Contracts";
import Connections from "./Connections";
import Exchange from "./Exchange";
import Ui from "./Ui";
import Dashboard from "./Dashboard";

const screens = [...Dashboard,...Contracts, ...Connections, ...Ui, ...Exchange];

export default screens;
