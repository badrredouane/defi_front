import { Col, Row } from "antd";
import React from "react";

import CurrencyBox from "shared/components/stories/CurrencyBox";
import Description from "shared/components/stories/Description";
import STXCurrency from "shared/assets/images/stack--currency.svg";
import Container from "shared/components/stories/Container";

const DataNumbers = [
  {
    id: "001",
    label: "Last Price",
    value: "0,3981",
    type: "green",
  },
  {
    id: "002",
    label: "24h Change",
    value: "0,3952  +1.42%",
    type: "green",
  },
  {
    id: "003",
    label: "24h High",
    value: "0.4082",
    type: "white",
  },
  {
    id: "004",
    label: "24h Low",
    value: "0.3782",
    type: "white",
  },
];

const Infos = () => {
  return (
    <div className="infos--header">
      <Container>
        <Row gutter={[32]}>
          <Col xs={24} sm={24} md={16} lg={18}>
            <Description items={DataNumbers} />
          </Col>
          <Col xs={24} sm={24} md={8} lg={6}>
            <CurrencyBox
              icon={<img src={STXCurrency} alt="STX-PERP" />}
              title="STX-PERP"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Infos.propTypes = {};

export default Infos;
