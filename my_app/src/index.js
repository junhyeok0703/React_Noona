import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppClass from "./AppClass";
const rootNode = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
  rootNode
);
