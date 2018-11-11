import React from "react";

export default ({ title, body }) => {
  return (
    <div className="note-list-item">
      <span>{title}</span>
    </div>
  );
};
