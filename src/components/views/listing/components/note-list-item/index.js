import React from "react";

export default ({ id, title, onClick, active }) => {
  return (
    <div>
      <div className="d-flex p-2">
        <button className={`w-100 btn ${active ? "btn-secondary" : "btn-outline-secondary"}`} onClick={() => onClick(id)}>
          <span>{title}</span>
        </button>
      </div>
    </div>
  );
};
