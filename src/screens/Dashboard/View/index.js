import { Col, Row } from "antd";
import { FiClock, FiPackage } from "react-icons/fi";
import { SiReact } from "react-icons/si";
import Box from "shared/components/Box";
import Filter from "shared/components/Filter";
import Input from "shared/components/Input";
import Statistics from "shared/components/Statistics";
import Table from "shared/components/Table";

import Container from "shared/components/stories/Container";
import Validator from "shared/components/Validator";

import { gql, useQuery } from "@apollo/client";
import fishLogo from "shared/assets/images/fish.jpg";
import Number from "shared/components/Number";
import Progress from "shared/components/Progress";

const DataStatistics = [
  {
    id: "001",
    label: "Cosmos Total",
    value: "1002293.00 M",
    icon: <SiReact size={24} />,
  },
  {
    id: "002",
    label: "Slashing Total",
    value: "3938",
    icon: <FiPackage size={24} />,
  },
  {
    id: "003",
    label: "Block Time",
    value: "6.75s",
    icon: <FiClock size={24} />,
  },
];

const data = [
  {
    key: "1",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "2",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "3",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "2",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "3",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "2",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "3",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "2",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "3",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "2",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
  {
    key: "3",
    rank: "Mike",
    validator: "dddd",
    votingPower: "Volting",
    cumulative: "cumulative",
    participation: "participation",
    uptime: "100%",
    nbrsSlash: "20",
    countAmount: "203.3M ATOM",
  },
];

const columns = [
  {
    title: "Rank",
    dataIndex: "rank",
    render: (_, __) => {
      return <Number nbr={1} />;
    },
    width: 80
  },
  {
    title: "Validator",
    dataIndex: "validator",
    render: (_, __) => {
      return (
        <Validator icon={<img src={fishLogo} alt="" />} name="🐠stake.fish" />
      );
    },
    width: "20%"

  },
  {
    title: "Voting Power",
    dataIndex: "votingPower",
    render: (_, __) => {
      return <div className="voting--area">
        <span>11,753,147</span>
        <small>6.30%</small>
      </div>;
    },
    align: 'right'
  },
  {
    title: "Cumulative Share %",
    dataIndex: "cumulative",
    render: (_, __) => {
      return <Progress value={22} />;
    },
  },
  {
    title: "Participation",
    dataIndex: "participation",
    render: (_, __) => {
      return <span className="badge--light">24/29</span>;
    },
    align: 'center'

  },
  {
    title: "Uptime",
    dataIndex: "uptime",
    key: "uptime",
    align: 'center'
  },
  {
    title: "Nbrs Slash",
    dataIndex: "nbrsSlash",
    key: "nbrsSlash",
    align: 'center'
  },
  {
    title: "Count Amount",
    dataIndex: "countAmount",
    key: "countAmount",
    align: 'center'
  },
];

const GET_VALIDATORS = gql`
  query validators {
      validators {
      data
      count
    }
  }
`;

const View = () => {
  const { loading, error, data: dataN } = useQuery(GET_VALIDATORS);
if(loading) return <div>Loading...</div>;
  return (
    <>
      <Container>
        <div className="grid--03 m-top-24 m-bottom-24">
          <Statistics items={DataStatistics} />
        </div>
        <Box>
          <Row gutter={[16, 16]} justify="space-between" align="center">
            <Col xs={24} sm={12} md={12} lg={8}>
              <Filter />
            </Col>
            <Col xs={24} sm={12} md={12} lg={8}>
              <Input size={"large"} type={"search"} placeholder={"Search"} />
            </Col>

            <Col xs={24} sm={24}>
              <div className="m-top-24 m-bottom-24">
                <Table dataSource={data} columns={columns} pagination={false}  />
              </div>
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  );
};

View.propTypes = {};

export default View;
