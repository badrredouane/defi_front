import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { Row, Col, Table, Tag } from "antd";
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
            className="offer"
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
    
    <Table
      className="custom--table"
      // scroll={{ x: 600, y: 200 }}
      size="small"
      dataSource={contracts}
      columns={columns}
      rowKey={"Idx"}
      sticky
      pagination={{ pageSize: 5 }}
    />
  );
};

Contracts.propTypes = {};

export default Contracts;
