import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "./error.css";

const NotFound = () => {
  return (
    <Container className="404-not-found">
      <Row>
        <h1>Oops ! We cannot find the page you are looking for !</h1>
      </Row>
    </Container>
  );
};
export default NotFound;
