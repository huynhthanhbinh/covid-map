import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import VietnamChart from "./stats-vn";
import WorldChart from "./stats-world";

import "./Dashboard.css";

const Stats = () => {
  return (
    <Container className="stats-main">
      <Row className="justify-content-center">
        <h1>Statistics</h1>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <VietnamChart chartName="Vietnam" />
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <WorldChart chartName="Worldwide" />
      </Row>
    </Container>
  );
};
export default Stats;
