import React from "react";
import Row from "react-bootstrap/Row";
import { Switch, Route } from "react-router-dom";

import Home from "../home/home";
import Map from "../map/Dashboard";
import Error from "../error/error";

const NavContent = () => {
  return (
    <Row className="navcontent">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/stats" component={null} />
        <Route exact path="*" component={Error} />
      </Switch>
    </Row>
  );
};
export default NavContent;
