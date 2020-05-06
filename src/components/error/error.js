import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "./error.css";

const NotFound = () => {
  return (
    <Container className="404-not-found">
      <Row className="justify-content-center">
        <h1>404 Not Found</h1>
      </Row>
      <Row className="justify-content-center">
        <h3>Oops ! We cannot find the page you are looking for !</h3>
      </Row>
    </Container>
  );
};
export default NotFound;
