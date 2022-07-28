import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { Row, Col, Table, Button, Tag } from "antd";
import {
  CONTRACT_STATUSES,
  CONTRACT_STATUSES_COLORS,
  SCREENS,
} from "utils/constants";
import { useApi } from "shared/contexts/Api";

const Contracts = () => {
  const api = useApi();
  const [contracts, setContracts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      const contracts = await api.fetcher.contracts.getAll();
      return setContracts(contracts);
    };
    fetchContracts();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "Idx",
      key: "Idx",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (_, __) => {
        return (
          <Tag color={CONTRACT_STATUSES_COLORS[__.Status]}>
            {CONTRACT_STATUSES[__.Status]}
          </Tag>
        );
      },
    },
    {
      title: "Peer",
      dataIndex: "PeerIdx",
      key: "PeerIdx",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, __) => {
        return (
          <Tag
            onClick={() =>
              navigate(`${SCREENS.CONTRACTS.OFFER}?${qs.stringify(__)}`)
            }
          >
            Offer
          </Tag>
        );
      },
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <Button onClick={() => api.fetcher.contracts.create()}>
          New Draft Contract
        </Button>
      </Col>
      <Col span={24}>
        <Table dataSource={contracts} columns={columns} rowKey={"Idx"} />
      </Col>
    </Row>
  );
};

Contracts.propTypes = {};

export default Contracts;
