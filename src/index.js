import React from "react";
import Reactdom from "react-dom";

// Service Workers
import runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
  const registration = runtime.register();
}

// Components
import App from "./app";

Reactdom.render(<App />, document.getElementById("Root"));
