import { Col, Row } from "antd";
import React from "react";

import Container from "shared/components/stories/Container";
import Infos from "../Infos";
import List from "../List";
import Position from "../Position";

const View = () => {
  return (
    <>
      <Infos />
      <Container>
        <Row gutter={[32]}>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 16, order: 1 }}
            lg={14}
          >
            <List />
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 8, order: 2 }}
            lg={10}
          >
            <Position />
          </Col>
        </Row>
      </Container>
    </>
  );
};

View.propTypes = {};

export default View;
