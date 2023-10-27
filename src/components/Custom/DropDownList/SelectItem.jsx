import React from "react";

const SelectItem = ({ selectedItems, text, templeteValue }) => {
  return (
    <>
      {selectedItems?.length > 0 ? (
        selectedItems?.map((d, i) => {
          const textValue = typeof text === "function" ? text(d) : d[text];
          return (
            <span className="span" key={i}>
              {templeteValue ? (
                <span>{templeteValue(d)}</span>
              ) : (
                <span className="drop-span">{textValue}</span>
              )}
            </span>
          );
        })
      ) : (
        <span className="multi-drop-placeholder">Select an item...</span>
      )}
    </>
  );
};

export default SelectItem;
