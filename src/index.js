import React from "react";
import Reactdom from "react-dom";
import history from "./utilities/history";

// Service Workers
import runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
  const registration = runtime.register();
}

// Components
import App from "./app";

Reactdom.render(<App {...{ history }} />, document.getElementById("Root"));
