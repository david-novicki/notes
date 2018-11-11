import React from "react";
import { listingContainer } from "./styles.css";
import history from "../../../utilities/history";

// Components
import NoteItem from "./components/note-list-item";

export default ({ notes = [] } = {}) => {
  const onLoadNote = id => {
    history.push(`/${id}`);
  };

  const createNewNote = () => {
    console.log("Create new note");
  };

  const NoteList = notes.map(note => (
    <NoteItem key={`_note_item_${note.id}`} {...note} onClick={onLoadNote} />
  ));

  return (
    <div className={listingContainer}>
      {NoteList}
      <NoteItem title="Create Note" onClick={createNewNote} />
    </div>
  );
};
