import React from "react";
import Row from "react-bootstrap/Row";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "../home/home";
import Map from "../map/Dashboard";
import Stats from "../stats/Dashboard";
import Error from "../error/error";

const NavContent = ({ history }) => {
  history.listen((location, action) => {
    console.log('action=' + action + ', path=' + location.pathname);
  });

  return (
    <Row className="navcontent">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/stats" component={Stats} />
        <Route component={Error} />
      </Switch>
    </Row>
  );
};
export default withRouter(NavContent);
