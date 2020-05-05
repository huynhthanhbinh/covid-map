import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeLogo from "./gallery/home.png";
import MapLogo from "./gallery/map.png";
import StatLogo from "./gallery/stat.png";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Dashboard from "./components/map/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";

require("./mocks");

ReactDOM.render(
  <StrictMode>
    <Router>
      <Container>
        <Row className="navbar">
          <Col xs={3}/>
          <Col xs={2} className="navbar-col">
            <Link to="/">
              <Image src={HomeLogo} className="navbar-icon" />
            </Link>
          </Col>
          <Col xs={2} className="navbar-col">
            <Link to="/map">
              <Image src={MapLogo} className="navbar-icon" />
            </Link>
          </Col>
          <Col xs={2} className="navbar-col">
            <Link to="/stats">
              <Image src={StatLogo} className="navbar-icon" />
            </Link>
          </Col>
          <Col xs={3}/>
        </Row>
        <Row>
          <Switch>
            <Route path="/map">
              <Dashboard />
            </Route>
            <Route path="/stats">{/* <StatDashboard /> */}</Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
