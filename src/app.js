import React, { Component } from "react";
import { hot } from "react-hot-loader";

// components
import ListingView from "./components/views/listing";
import DetailView from "./components/views/detail";

import MOCK_DATA from "./mock-data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: MOCK_DATA.notes,
      activeNote: null
    };
  }

  componentWillReceiveProps({ history }) {
    this.onLocationChange(history.location);
  }

  onLocationChange(nextLocation) {
    const { history } = this.props;
    console.log(history.location.pathname, nextLocation.pathname);

    if (nextLocation.pathname !== history.location.pathname)
      console.log("route changed!");
  }

  render() {
    const { notes, activeNote } = this.state;
    return (
      <div className="d-flex">
        <ListingView {...{ notes }} />
        <DetailView note={activeNote} />
      </div>
    );
  }
}

export default hot(module)(App);
