import React from "react";

function ListButtons() {
  return (
    <div
      className="btn-group-vertical col-2"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button type="button" className="btn btn-warning">
        Cars
      </button>
      <button type="button" className="btn btn-warning">
        Food
      </button>
      <button type="button" className="btn btn-warning">
        Other
      </button>
    </div>
  );
}

export default ListButtons;
