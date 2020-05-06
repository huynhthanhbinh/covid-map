import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import HomeLogo from "./icon-home.png";
import MapLogo from "./icon-map.png";
import StatLogo from "./icon-stat.png";

import "./home.css";

const Home = () => {
  return (
    <Container className="home-main">
      <Row className="justify-content-center">
        <h1>Home</h1>
      </Row>
      <Row className="justify-content-center align-items-center">
        <div className="home-main-content">
          <p>
            Click&nbsp;
            <Image src={HomeLogo} className="navbar-icon" />
            &nbsp;to navigate to&nbsp;
            <b>
              <i>Home</i>
            </b>
          </p>
          <p>
            Click&nbsp;
            <Image src={MapLogo} className="navbar-icon" />
            &nbsp;to navigate to&nbsp;
            <b>
              <i>Movement History</i>
            </b>
          </p>
          <p>
            Click&nbsp;
            <Image src={StatLogo} className="navbar-icon" />
            &nbsp;to navigate to&nbsp;
            <b>
              <i>Statistics</i>
            </b>
          </p>
        </div>
      </Row>
      <Row className="justify-content-center align-items-center">
        <div>
          <br />
          <hr />
          <p>
            <b>App:</b> COVID19 statistics - v0.1.0
            <br />
            <b>Author:</b> Huynh Thanh Binh
            <br />
            <b>Email:</b> 1653006@student.hcmus.edu.vn
            <br />
            <b>Github:</b>&nbsp;
            <a href="https://github.com/huynhthanhbinh/covid-map">
              https://github.com/huynhthanhbinh/covid-map
            </a>
            <br />
            <b>Deploy:</b>&nbsp;
            <a href="https://covid2019-statistics.herokuapp.com">
              https://covid2019-statistics.herokuapp.com
            </a>
            <br />
          </p>
        </div>
      </Row>
    </Container>
  );
};
export default Home;
