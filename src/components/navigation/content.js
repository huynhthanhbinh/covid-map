import React from "react";
import Row from "react-bootstrap/Row";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../map/Dashboard";

const NavContent = () => {
  return (
    <Row className="navcontent">
      <Switch>
        <Route path="/map">
          <Dashboard />
        </Route>
        <Route path="/stats">{/* <StatDashboard /> */}</Route>
      </Switch>
    </Row>
  );
};
export default NavContent;
