import React from "react";

const SortingIcons = ({ header }) => {
  return (
    <>
      {header.column.getCanSort() && (
        <div>
          <span
            className={`sort material-symbols-outlined ${
              header.column.getIsSorted() === "asc" ? "active" : ""
            }`}
          >
            north
          </span>
          <span
            className={`sort material-symbols-outlined ${
              header.column.getIsSorted() === "desc" ? "active" : ""
            }`}
          >
            south
          </span>
        </div>
      )}
    </>
  );
};

export default SortingIcons;
