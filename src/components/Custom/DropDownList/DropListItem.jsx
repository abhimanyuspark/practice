import React from "react";

const DropListItem = ({
  it,
  text,
  isMulti,
  filterData,
  templetItem,
  selectedItems,
  templetNoRecord,
  handleChange,
}) => {
  return (
    <>
      {filterData?.length > 0 ? (
        filterData?.map((d, i) => {
          const textValue = typeof text === "function" ? text(d) : d[text];
          return (
            <li
              className={`${
                isMulti ? `muti-li` : `${d && textValue === it ? "active" : ""}`
              }`}
              key={i}
              onClick={() => {
                handleChange(d);
              }}
            >
              <span>{templetItem ? templetItem(d) : textValue}</span>
              {isMulti && <span>{selectedItems?.includes(d) ? "✔" : ""}</span>}
            </li>
          );
        })
      ) : (
        <li className={templetNoRecord ? "" : "no-record"}>
          {templetNoRecord ? templetNoRecord() : "No record found"}
        </li>
      )}
    </>
  );
};

export default DropListItem;
