import { StacksMocknet } from "micro-stacks/network";
import { BlocksApi, Configuration } from "@stacks/blockchain-api-client";
const SHA256 = require("crypto-js/sha256");
const { callReadOnlyFunction } = require("micro-stacks/transactions");
const axios = require("axios");

const {
  bufferCV,
  ClarityType,
  cvToString,
  listCV,
  tupleCV,
  uintCV,
} = require("micro-stacks/clarity");
const { MerkleTree } = require("merkletreejs");
const reverse = require("buffer-reverse");
const { decodeTransaction, hexToBin } = require("@bitauth/libauth");

const ERR_DIFFERENT_HEX = "different hex";
const ERR_NO_STACKS_BLOCK = "no stacks block";
const ERR_API_FAILURE = "api failure";
const STACK_API_URL = "http://localhost:3999";
const NETWORK = new StacksMocknet({
  coreApiUrl: STACK_API_URL,
});

const CLARITY_BITCOIN_CONTRACT = {
  address: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
  name: "clarity-bitcoin",
};
const CONTRACT_ADDRESS = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";

const network = NETWORK;

const basePath = STACK_API_URL;
const config = new Configuration({ basePath });
export const blocksApi = new BlocksApi(config);

async function getStxBlock(bitcoinBlockHeight) {
  let limit = 30;
  let offset = 0;
  const firstResponse = await blocksApi.getBlockList({ offset, limit });
  let stxBlock = firstResponse.results.find(
    (b) => b.burn_block_height === bitcoinBlockHeight
  );
  offset += Math.max(
    limit,
    firstResponse.results[0].burn_block_height - bitcoinBlockHeight
  );
  console.log("getStxBlock", { offset });
  while (!stxBlock) {
    const blockListResponse = await blocksApi.getBlockList({ offset, limit });
    const blocks = blockListResponse.results;
    stxBlock = blocks.find((b) => b.burn_block_height === bitcoinBlockHeight);
    offset -= limit;
    console.log("getStxBlock", { offset });
    if (
      offset < 0 ||
      blocks[blocks.length - 1].burn_block_height > bitcoinBlockHeight
    )
      return undefined;
  }
  return stxBlock;
}

async function concatTransaction(txPartsCV) {
  const result = await callReadOnlyFunction({
    contractAddress: CLARITY_BITCOIN_CONTRACT.address,
    contractName: CLARITY_BITCOIN_CONTRACT.name,
    functionName: "concat-tx",
    functionArgs: [txPartsCV],
    senderAddress: CLARITY_BITCOIN_CONTRACT.address,
    network,
  });
  console.log("concat-tx", cvToString(result));
  return result;
}

function numberToBuffer(value, size) {
  // increase size by 1 for "too large" numbers
  const buf = Buffer.alloc(size + 1);
  if (size === 4) {
    buf.writeIntLE(value, 0, size + 1);
  } else if (size === 8) {
    buf.writeUInt32LE(value, 0, size + 1);
  } else {
    console.log(`unsupported size ${size}`);
    // not supported
  }
  // remove the extra byte again
  return buf.slice(0, size);
}

function txForHash(txHex) {
  const transaction = decodeTransaction(hexToBin(txHex));
  console.log("first", transaction);
  transaction.toHex();
  return transaction.toBuffer().toString("hex");
}

export async function paramsFromTx(btcTxId, stxHeight) {
  console.log(btcTxId);

  const tx = {
    txid: "2f9051dc72980e4570eafbe6839b8507df3363ea2729ce94f5f7f6750bca74f6",
    hash: "2648d99b4fd92504273a0fe6b5f55d27eb6cce13ee83a25fdd0df32202bcbd70",
    version: 2,
    size: 173,
    vsize: 146,
    weight: 584,
    locktime: 0,
    vin: [
      {
        coinbase: "0229010101",
        txinwitness: [
          "0000000000000000000000000000000000000000000000000000000000000000",
        ],
        sequence: 4294967295,
      },
    ],
    vout: [
      {
        value: 25.000175,
        n: 0,
        scriptPubKey: {
          asm: "OP_DUP OP_HASH160 ee9369fb719c0ba43ddf4d94638a970b84775f47 OP_EQUALVERIFY OP_CHECKSIG",
          hex: "76a914ee9369fb719c0ba43ddf4d94638a970b84775f4788ac",
          reqSigs: 1,
          type: "pubkeyhash",
          addresses: ["n3GRiDLKWuKLCw1DZmV75W1mE35qmW2tQm"],
        },
      },
      {
        value: 0,
        n: 1,
        scriptPubKey: {
          asm: "OP_RETURN aa21a9eda996c31d2f46526b1393343c72716b090328fd6a81449f02316bc01ce3e3d02e",
          hex: "6a24aa21a9eda996c31d2f46526b1393343c72716b090328fd6a81449f02316bc01ce3e3d02e",
          type: "nulldata",
        },
      },
    ],
    hex: "02000000010000000000000000000000000000000000000000000000000000000000000000ffffffff050229010101ffffffff025c3d0395000000001976a914ee9369fb719c0ba43ddf4d94638a970b84775f4788ac0000000000000000266a24aa21a9eda996c31d2f46526b1393343c72716b090328fd6a81449f02316bc01ce3e3d02e00000000",
    blockhash:
      "2b4aa8898cd64e8720f11042b2dee32568eff9a4bf8c99053d78942714eec5d0",
    confirmations: 195,
    time: 1657061792,
    blocktime: 1657061792,
  };
  if (!tx.hex) {
    console.log(tx);
    return {
      txCV: undefined,
      proofCV: undefined,
      block: undefined,
      blockCV: undefined,
      headerPartsCV: undefined,
      header: undefined,
      headerParts: undefined,
      stxHeight: undefined,
      txPartsCV: undefined,
      error: ERR_API_FAILURE,
    };
  }

  /*
    tx.hex = tx.tx_hex;
   */

  // tx hex without witness
  //const txCV = bufferCV(MerkleTree.bufferify(txForHash(tx.hex)));
  const txCV = bufferCV(MerkleTree.bufferify(tx.hex));

  let version;
  if (tx.hex.substr(9, 10) === "00") {
    version = tx.hex.substr(0, 12);
  } else {
    version = tx.hex.substr(0, 8);
  }

  // tx decomposed
  const txPartsCV = tupleCV({
    version: bufferCV(Buffer.from(version, "hex")),
    ins: listCV(
      tx.inputs.map((input) => {
        /*
                                  input.prev_hash = input.received_from.txid;
                                  input.output_index = input.received_from.output_no;
                                  input.script = input.script_hex;
                                  input.sequence = 123;
                                  */
        switch (input.script_type) {
          case "pay-to-witness-pubkey-hash":
            return tupleCV({
              outpoint: tupleCV({
                hash: bufferCV(reverse(Buffer.from(input.prev_hash, "hex"))),
                index: bufferCV(numberToBuffer(input.output_index, 4)),
              }),
              scriptSig: bufferCV(Buffer.from(input.script, "hex")),
              sequence: bufferCV(numberToBuffer(input.sequence, 4)),
            });
          case "pay-to-pubkey-hash":
          default:
            return tupleCV({
              outpoint: tupleCV({
                hash: bufferCV(reverse(Buffer.from(input.prev_hash, "hex"))),
                index: bufferCV(numberToBuffer(input.output_index, 4)),
              }),
              scriptSig: bufferCV(Buffer.from(input.script, "hex")),
              sequence: bufferCV(numberToBuffer(input.sequence, 4)),
            });
        }
      })
    ),
    outs: listCV(
      tx.outputs.map((output) =>
        tupleCV({
          scriptPubKey: bufferCV(Buffer.from(output.script, "hex")),
          value: bufferCV(numberToBuffer(output.value, 8)),
        })
      )
    ),
    locktime: bufferCV(Buffer.from(tx.hex.substr(tx.hex.length - 8), "hex")),
  });
  const txHexResponse = await concatTransaction(txPartsCV);
  if (
    txHexResponse.type === ClarityType.OptionalNone ||
    txHexResponse.buffer.toString("hex") !== tx.hex
  ) {
    console.log({ err: cvToString(txHexResponse) });
    return {
      txCV: undefined,
      proofCV: undefined,
      block: undefined,
      blockCV: undefined,
      headerPartsCV: undefined,
      header: undefined,
      headerParts: undefined,
      stxHeight: undefined,
      txPartsCV: undefined,
      error: ERR_DIFFERENT_HEX,
    };
  }

  let height;
  let stacksBlock;
  if (!stxHeight) {
    console.log("try to find stx height");
    const bitcoinBlockHeight = tx.block_height;
    stacksBlock = await getStxBlock(bitcoinBlockHeight);
    if (!stacksBlock) {
      return {
        txCV: undefined,
        proofCV: undefined,
        block: undefined,
        blockCV: undefined,
        headerPartsCV: undefined,
        header: undefined,
        headerParts: undefined,
        stxHeight: undefined,
        txPartsCV: undefined,
        error: ERR_NO_STACKS_BLOCK,
      };
    }
    height = stacksBlock.height;
  } else {
    const stacksBlockResponse = await fetch(
      `https://stacks-node-api.mainnet.stacks.co/extended/v1/block/by_height/${stxHeight}`
    );
    stacksBlock = await stacksBlockResponse.json();
    height = stxHeight;
  }
  console.log({ height, stacksBlockHash: stacksBlock.hash });

  const blockResponse = await fetch(
    `https://api.blockcypher.com/v1/btc/main/blocks/${tx.block_hash}?limit=500`
  );
  const blockFirstPart = await blockResponse.json();
  const txCount = blockFirstPart.n_tx;
  let block = blockFirstPart;
  while (block.txids.length < txCount) {
    const response = await fetch(
      `https://api.blockcypher.com/v1/btc/main/blocks/${tx.block_hash}?limit=500&txstart=${block.txids.length}`
    );
    const blockNextPart = await response.json();
    block.txids = block.txids.concat(blockNextPart.txids);
    console.log({ txidsLength: block.txids.length });
  }

  const headerResponse = await fetch(
    `https://blockstream.info/api/block/${tx.block_hash}/header`
  );
  const header = await headerResponse.text();

  // proof cv
  const txIndex = block.txids.findIndex((id) => id === btcTxId);
  const tree = new MerkleTree(block.txids, SHA256, { isBitcoinTree: true });
  const treeDepth = tree.getDepth();
  const proof = tree.getProof(btcTxId, txIndex);
  const proofCV = tupleCV({
    "tx-index": uintCV(txIndex),
    hashes: listCV(proof.map((po) => bufferCV(reverse(po.data)))),
    "tree-depth": uintCV(treeDepth),
  });

  // block parts
  const headerParts = [
    header.substr(0, 8),
    header.substr(8, 64),
    header.substr(72, 64),
    header.substr(136, 8),
    header.substr(144, 8),
    header.substr(152, 8),
  ];

  const headerPartsCV = tupleCV({
    version: bufferCV(Buffer.from(headerParts[0], "hex")),
    parent: bufferCV(Buffer.from(headerParts[1], "hex")),
    "merkle-root": bufferCV(Buffer.from(headerParts[2], "hex")),
    timestamp: bufferCV(Buffer.from(headerParts[3], "hex")),
    nbits: bufferCV(Buffer.from(headerParts[4], "hex")),
    nonce: bufferCV(Buffer.from(headerParts[5], "hex")),
    height: uintCV(height),
  });
  return {
    txCV,
    proofCV,
    headerPartsCV,
  };
}

export async function wasTxMined(blockPartsCV, txCV, proofCV) {
  const result = await callReadOnlyFunction({
    contractAddress: CLARITY_BITCOIN_CONTRACT.address,
    contractName: CLARITY_BITCOIN_CONTRACT.name,
    functionName: "was-tx-mined",
    functionArgs: [blockPartsCV, txCV, proofCV],
    senderAddress: CONTRACT_ADDRESS,
    network,
  });
  console.log("was-tx-mined", cvToString(result));
  return result;
}
