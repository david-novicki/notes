import React from "react";

export default ({ note }) => {
  if (!note) return <div>Select a note</div>;

  const { title } = note;
  return <div>{title}</div>;
};
