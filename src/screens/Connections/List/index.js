import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Table, Button } from "antd";
import { SCREENS } from "utils/constants";
import { useApi } from "shared/contexts/Api";

const Connections = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      const connections = await api.fetcher.connections.getAll();
      return setConnections(connections);
    };
    fetchConnections();
  }, []);

  const columns = [
    {
      title: "Peer Number",
      dataIndex: "PeerNumber",
      key: "PeerNumber",
    },
    {
      title: "Remote Host",
      dataIndex: "RemoteHost",
      key: "RemoteHost",
    },
    {
      title: "Address",
      dataIndex: "LitAdr",
      key: "LitAdr",
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <Button onClick={() => navigate(SCREENS.CONNECTIONS.CREATE)}>
          New Connection
        </Button>
      </Col>
      <Col span={24}>
        <Table
          dataSource={connections}
          columns={columns}
          rowKey={"PeerNumber"}
        />
      </Col>
    </Row>
  );
};

Connections.propTypes = {};

export default Connections;
