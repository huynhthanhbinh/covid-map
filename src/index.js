import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

require("./mocks");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
