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
      activeNoteId: MOCK_DATA.notes[0].id,
      activeNote: MOCK_DATA.notes[0]
    };

    this.onLoadNote = this.onLoadNote.bind(this);
    this.onCreateNote = this.onCreateNote.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
  }

  onLoadNote(activeNoteId) {
    const { notes } = this.state;
    const activeNote = notes.find(({ id }) => id === activeNoteId);
    this.setState({ activeNoteId, activeNote });
  }

  onCreateNote() {
    const newNote = MOCK_DATA.createNewNote({ title: "New Note" });
    this.setState({ notes: [...this.state.notes, newNote] });
  }

  onEditNote({ target: { name, value } }) {
    const { activeNote, notes } = this.state;
    const changedActiveNote = { ...activeNote, [name]: value };
    const persistentNoteI = notes.findIndex(({ id }) => activeNote.id === id);
    notes[persistentNoteI] = changedActiveNote;
    this.setState({ activeNote: changedActiveNote, notes });
  }

  render() {
    const { state, onLoadNote, onCreateNote, onEditNote } = this;
    const { notes, activeNote, activeNoteId } = state;
    return (
      <div className="d-flex w-100 h-100">
        <ListingView {...{ notes, onLoadNote, onCreateNote, activeNoteId }} />
        <DetailView note={activeNote} {...{ onCreateNote, onEditNote }} />
      </div>
    );
  }
}

export default hot(module)(App);
