import React from "react";

// Components
import NoteItem from "./components/note-list-item";

export default ({ notes = [], onLoadNote, onCreateNote, activeNoteId } = {}) => {
  const NoteList = notes.map(note => <NoteItem key={`_note_item_${note.id}`} {...note} onClick={onLoadNote} active={activeNoteId === note.id} />);

  return (
    <div className="p-3">
      {NoteList}
      <NoteItem title="Create Note" onClick={onCreateNote} />
    </div>
  );
};
