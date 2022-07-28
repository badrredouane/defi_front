import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Modal } from "antd";
import { useApi } from "shared/contexts/Api";
import { GO_BACKS } from "utils/constants";

const Create = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [peer, setPeer] = useState(null);
  return (
    <Modal
      visible={true}
      onCancel={() => navigate(GO_BACKS.ONE)}
      onOk={() => {
        api.fetcher.connections.create({ address: peer });
      }}
    >
      <Input
        addonBefore="@"
        placeholder="{buddy}@{ip}:{port}"
        onChange={(_) => setPeer(_.target.value)}
      />
    </Modal>
  );
};

Create.propTypes = {};

export default Create;
