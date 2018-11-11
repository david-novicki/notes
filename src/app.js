import React, { Component } from "react";
import { hot } from "react-hot-loader";

// components
import ListingView from "./components/views/listing";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <ListingView />
      </div>
    );
  }
}

export default hot(module)(App);
