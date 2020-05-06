import React from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./components/navigation/navbar";
import NavigationContent from "./components/navigation/content";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Container>
        <NavigationBar />
        <NavigationContent />
      </Container>
    </Router>
  );
};

export default App;
