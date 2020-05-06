import React, { useRef } from "react";

import Container from "react-bootstrap/Container";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./components/navigation/navbar";
import NavigationContent from "./components/navigation/content";

import "./App.css";

const App = () => {
  const navbar = useRef()

  const setNavbarTitle = (newTitle) => {
    navbar.current.setTitle(newTitle)
  }

  return (
    <Router>
      <Container>
        <NavigationBar ref={navbar} />
        <NavigationContent setNavbarTitle={setNavbarTitle} />
      </Container>
    </Router>
  );
};

export default App;
