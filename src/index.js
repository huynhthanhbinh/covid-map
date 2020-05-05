import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./components/navigation/navbar";
import NavigationContent from "./components/navigation/content";

import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

require("./mocks");

ReactDOM.render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <NavigationBar />
        <NavigationContent />
      </Container>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
