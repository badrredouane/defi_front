import { Tabs, Row, Col } from "antd";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import Chart from "./Chart";
import Infos from "./Infos";
import { Create as CreatePosition, List as Positions } from "./Positions";
import { Create as CreateContract, List as Contracts } from "./Contracts";
import { Create as CreateConnection, List as Connections } from "./Connections";
import Container from "shared/components/Container";
const { TabPane } = Tabs;

const View = () => {
 
  return (
    <>
      <Infos />
      <Chart />

      <Container>
        <Row gutter={[32]}>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 24, order: 2 }}
            lg={{ span: 14, order: 1 }}
          >
            <Tabs defaultActiveKey="1" className="custom--tab">
              <TabPane tab="Positions" key="1">
                <Positions />
              </TabPane>
              <TabPane tab="Discreet Log Contracts" key="2">
                <Contracts />
              </TabPane>
              <TabPane tab="Connections" key="3">
                <Connections />
              </TabPane>
              <TabPane tab={<RiAddFill size={20} />} key="4">
                <div className="center--content--col">
                    <CreateContract />
                    
                    <CreateConnection />
                </div>
                  
              </TabPane>
            </Tabs>
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 24, order: 1 }}
            lg={{ span: 10, order: 2 }}
          >
            <CreatePosition />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default View;
