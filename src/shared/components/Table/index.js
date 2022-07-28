import { Table } from "antd";
import React from "react";

const Container = ({ dataSource, columns,...rest }) => {
  return (
    <Table
      className="custom--slashing--table"
      dataSource={dataSource}
      columns={columns}
      scroll={{x: 900, y: 500 }}
      {...rest}
    />
  );
};

export default Container;
