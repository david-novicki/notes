import React, { Component } from "react";
import { container } from "./style.css";

const tempNotes = [
  {
    title: "note 1",
    body:
      "asdfasdfasdf asdf asdf asdf asdfasdf asdfas dfa sdfasdf asdf as asdfasdfas df."
  }
];

export default class ListingView extends Component {
  constructor() {
    super();

    this.state = {
      notes: tempNotes
    };
  }

  render() {
    return <div className={container}>listing</div>;
  }
}
