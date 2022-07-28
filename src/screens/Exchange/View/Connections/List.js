import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "antd";
import { useApi } from "shared/contexts/Api";

const Connections = () => {
  const api = useApi();
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
    <Table
      className="custom--table"
      size="small"
      dataSource={connections}
      columns={columns}
      rowKey={"PeerNumber"}
    />
  );
};

Connections.propTypes = {};

export default Connections;
