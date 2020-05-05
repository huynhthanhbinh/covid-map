import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { Link } from "react-router-dom";

import HomeLogo from "./navbar-home.png";
import MapLogo from "./navbar-map.png";
import StatLogo from "./navbar-stat.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <Row className="navbar">
      <Col xs={3} />
      <Col xs={2} className="navbar-col">
        <Link to="/">
          <Image
            src={HomeLogo}
            className="navbar-icon"
            title="Go to home page"
          />
        </Link>
      </Col>
      <Col xs={2} className="navbar-col">
        <Link to="/map">
          <Image
            src={MapLogo}
            className="navbar-icon"
            title="Go to patient map page"
          />
        </Link>
      </Col>
      <Col xs={2} className="navbar-col">
        <Link to="/stats">
          <Image
            src={StatLogo}
            className="navbar-icon"
            title="Go to statistics page"
          />
        </Link>
      </Col>
      <Col xs={3} />
    </Row>
  );
};
export default NavBar;
