import React from "react";

export default ({ id, title, onClick }) => {
  return (
    <div>
      <div className="d-flex p-2">
        <button
          className="w-100 btn btn-outline-secondary"
          onClick={() => onClick(id)}
        >
          <span>{title}</span>
        </button>
      </div>
    </div>
  );
};
