import React from "react";
import { noBorder } from "./style.css";

// components
import Body from "./components/body-editor";

export default ({ note, onEditNote }) => {
  if (!note) return <div>Select a note</div>;

  const { title, dateCreated, body } = note;
  return (
    <div className="d-flex flex-column p-4 w-100 h-100">
      <input className={`h4 ${noBorder}`} name="title" onChange={onEditNote} value={title} />
      <span className="text-muted">{dateCreated}</span>
      <Body value={body} name="body" onChange={onEditNote} />
      {/* <textarea className={`mt-3 w-100 h-100 ${noBorder}`} name="body" value={body} onChange={onEditNote} /> */}
    </div>
  );
};
