import React, { useEffect, useState } from "react";
import { makeContractCall, makeRandomPrivKey } from "micro-stacks/transactions";
import { uintCV } from "micro-stacks/clarity";
import { useAccount } from "@micro-stacks/react";

import moment from "moment";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Box from "shared/components/Box";
import Button from "shared/components/Button";
import Input from "shared/components/Input";
import { useApi } from "shared/contexts/Api";
import { GO_BACKS, NETWORK } from "utils/constants";

const Create = () => {
  const [assets, setAssets] = useState([]);
  const contract = { Idx: 43 };
  const api = useApi();
  const { stxAddress, ...rest } = useAccount();
  const navigate = useNavigate();
  const timestamp = moment().add(1, "hour").unix();

  const privateKey = makeRandomPrivKey();
  console.log("first", privateKey);

  useEffect(() => {
    const fetchAssets = async () => {
      const assets = await api.fetcher.assets.getAll();
      return setAssets(assets);
    };
    fetchAssets();
  }, []);

  const offerContract = async () => {
    const [asset] = assets;
    await api.fetcher.contracts.update.coinType({
      id: contract.Idx,
      coinType: 257,
    });
    await api.fetcher.contracts.update.oracle({ id: contract.Idx }, { id: 4 });
    await api.fetcher.contracts.update.settlementTime({
      id: contract.Idx,
      timestamp,
    });
    await api.fetcher.contracts.update.funding({
      id: contract.Idx,
      funding: { ours: 1, theirs: 20000 },
    });
    await api.fetcher.contracts.update.dataFeed({ id: contract.Idx }, asset);
    await api.fetcher.contracts.update.division({
      id: contract.Idx,
      division: { ours: 10, theirs: 20 },
    });
    await api.fetcher.contracts.update.funding({
      id: contract.Idx,
      funding: { ours: 1, theirs: 20000 },
    });
    await api.fetcher.contracts.offer({ id: contract.Idx }, { id: 2 });

    const txOptions = {
      contractAddress: "ST3692NGYYKQ4JJYJBNXH9Q2RYNMSYJJ3FBR7TDQP",
      contractName: "tlx-stable-coin-01",
      functionName: "mint-t-usd",
      functionArgs: [uintCV(12345)],
      senderKey:
        "b244296d5907de9864c0b0d51f98a13c52890be0404e83f273144cd5b9960eed01",
      validateWithAbi: true,
      network: NETWORK,
      postConditions: [],
    };

    const transaction = await makeContractCall(txOptions);
    console.log("transaction", transaction);
  };

  return (
    <Modal
      centered
      visible={true}
      onCancel={() => navigate(GO_BACKS.ONE)}
      footer={null}
      className="custom--modal"
    >
      <Box>
        <Input
          type="large"
          elements={[
            { label: "BTC", value: 1 },
            { label: "tUSD", value: 20000 },
          ]}
        />

        
        <div className="footer">
          <Button
            type={"submit"}
            buttonSize={"btn--large"}
            onClick={() => offerContract()}
          >
            <span>{"Lock My BTC"}</span>
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Create;
