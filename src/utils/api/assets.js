import { Buffer } from "buffer";
import { ORACLES } from "utils/constants";

const getAll = async () => {
  const response = await fetch("http://127.0.0.1:3010/api/datasources");
  const assets = await response.json();
  const [oracle] = ORACLES;
  return assets.map((asset) => ({
    id: asset.id,
    name: asset.name,
    oracle: { id: oracle.id },
    dataFeed: { id: asset.id },
  }));
};

const get = async (asset, timeUnix) => {
  const [oracle] = ORACLES;
  const response = await fetch(
    `http://127.0.0.1:3010/api/rpoint/${
      asset.dataFeed.id
    }/${timeUnix.toString()}`
  );

  const result = await response.json();
  console.log("result.R", result.R);
  const buffer = Buffer.from(result.R, "hex");
  const rPoint = [];
  for (var i = 0; i < buffer.length; i++) rPoint[i] = buffer[i];
  return [oracle.A, result.R];
};

const assets = { getAll, get };

export default assets;
