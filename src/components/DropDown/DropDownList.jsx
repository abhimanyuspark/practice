import React, { useEffect, useRef, useState } from "react";
import "./dropdown.css";
import { AnimatePresence, motion } from "framer-motion";

const DropDownListComponent = ({
  data,
  fields,
  templetItem,
  templetItemNodata,
  templeteValue,
  templetValueNodata,
  templetNoRecord,
  enableNoDataRow = false,
  sorting = false,
  search = false,
  onItemSelected,
  maxWidth,
  maxHeight,
  isMulti = false,
  defaultValue,
}) => {
  //* This is for most important when user did not send the fields it will show nothing.
  if (!fields || (!fields.text && typeof fields.text !== "function")) {
    return null;
  }

  const [show, setShow] = useState(false);
  const { text } = fields;
  const modified = sorting
  ? [...data].sort((a, b) => {
      const textA = typeof text === "function" ? text(a) : a[text];
      const textB = typeof text === "function" ? text(b) : b[text];
      return textA.localeCompare(textB);
    })
  : data;
  const [selectedItems, setSelectedItems] = useState(
    defaultValue
      ? Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue]
      : [modified[0]]
  );
  const [item, setItem] = useState(
    defaultValue
      ? Array.isArray(defaultValue)
        ? "accepts an object"
        : defaultValue
      : modified[0]
  );
  const [query, setQuery] = useState("");
  const dropRef = useRef();
  const searchRef = useRef(null);

  //* This is for showing the component and set an empty string to search input.
  const handleShow = () => {
    setShow(!show);
    setQuery("");
  };

  //* This is for chaniging the item.
  const handleChange = (d) => {
    if (isMulti) {
      const isSelected = selectedItems.includes(d);
      setSelectedItems((prevItems) =>
        isSelected ? prevItems.filter((item) => item !== d) : [...prevItems, d]
      );
    } else {
      handleShow();
      setItem(d);
    }
  };

  //* This is for sending an empty string in item.
  const handleNoData = () => {
    setShow(false);
    setItem("");
  };

  //* This is for search the data through the modified array.
  const filterData = modified.filter((d) => {
    const textValue = typeof text === "function" ? text(d) : d[text];
    return textValue && textValue.toLowerCase().includes(query.toLowerCase());
  });

  //* This is for callback function giving the data outside the component.
  //* or giving the data to parent component.
  // useEffect(() => {
  //   onItemSelected && onItemSelected(isMulti ? selectedItems : item);
  //   // console.log("onItemSelected");
  // }, [item, selectedItems, isMulti]);

  //* This is for closing the component when user click outside the box.
  useEffect(() => {
    let handler = (e) => {
      if (!dropRef.current.contains(e.target)) {
        setShow(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  //* This is for focus on search bar automatic when componet is show.
  useEffect(() => {
    if (show && searchRef.current) {
      searchRef.current.focus();
    }
    // console.log("Show");
  }, [show]);

  //* Start =>  function when isMulti is true then select and deselect the data.
  const handleSelectAll = () => {
    setSelectedItems([...filterData]);
  };
  const handleDeselectAll = () => {
    setSelectedItems([]);
  };
  //* end

  //* Here is cheacking fields "text" is a function or an a string.
  const it = item ? (typeof text === "function" ? text(item) : item[text]) : "";

  return (
    <div
      ref={dropRef}
      className="drop-box"
      style={maxWidth ? { width: maxWidth } : { width: "400px" }}
    >
      {isMulti ? ( //? when isMulti is true.
        <div className="drop-container">
          <div onClick={handleShow} className="templeteValue">
            <div className="multi-box">
              {selectedItems.length > 0 ? (
                selectedItems.map((d, i) => {
                  const textValue =
                    typeof text === "function" ? text(d) : d[text];
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
                <span className="multi-drop-placeholder">
                  Select an item...
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        //? when multi is false.
        <div className="drop-container">
          {templeteValue ? ( //? when tampleteValue is true.
            <div onClick={handleShow} className="templeteValue">
              {item === "" ? (
                <div style={{ padding: "5px" }}>{"--"}</div>
              ) : (
                templeteValue(item)
              )}
            </div>
          ) : (
            <>
              {templetValueNodata ? ( //? when there is no data and you can customize it.
                <div
                  className="templeteValue"
                  onClick={handleShow}
                  style={{ padding: "10px" }}
                >
                  {templetValueNodata()}
                </div>
              ) : (
                //? This is a default one when there is no templeteValue is provide.
                <div className="input">
                  <input
                    id="select"
                    name="select"
                    type="text"
                    value={item ? it : "--"}
                    readOnly={true}
                    onClick={handleShow}
                    className="input-text"
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}
      <AnimatePresence>
        {/* //* This is for animation using "framer-motion" package. */}
        {show && (
          <motion.div //* This is also from "framer-motion".
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: "50px" }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="drop-list"
          >
            {search && ( //? This is for search through the data.
              <div className="drop-search">
                <input
                  ref={searchRef}
                  id="search"
                  name="search"
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            )}
            {isMulti && ( //? This is for select and deselect butttons.
              <div className="multi-button">
                <div className="selected-button" onClick={handleSelectAll}>
                  Select All
                </div>
                <div className="selected-button" onClick={handleDeselectAll}>
                  Deselect All
                </div>
              </div>
            )}
            <ul
              style={
                maxHeight ? { maxHeight: maxHeight } : { maxHeight: "300px" }
              }
            >
              {!isMulti &&
                enableNoDataRow && ( //? When you want to show no data li.
                  <li
                    className={item === "" ? "active" : ""}
                    onClick={() => {
                      handleNoData();
                    }}
                  >
                    {templetItemNodata ? templetItemNodata() : "--"}
                  </li>
                )}
              {filterData.length > 0 ? ( //* There is the list showing through the data.
                filterData.map((d, i) => {
                  // ? Here is cheacking fields "text" is a function or an a string.
                  const textValue =
                    typeof text === "function" ? text(d) : d[text];
                  return (
                    <li
                      // className={`${
                      //   isMulti
                      //     ? `${selectedItems.includes(d) ? "active" : ""}`
                      //     : `${d && textValue === it ? "active" : ""}`
                      // }`}
                      className={`${
                        isMulti
                          ? `muti-li`
                          : `${d && textValue === it ? "active" : ""}`
                      }`}
                      key={i}
                      onClick={() => {
                        handleChange(d);
                      }}
                    >
                      <span>{templetItem ? templetItem(d) : textValue}</span>
                      {isMulti && (
                        <span>{selectedItems.includes(d) ? "✔" : ""}</span>
                      )}
                    </li>
                  );
                })
              ) : (
                // ? When no record or data from an modified array.
                <li className={templetNoRecord ? "" : "no-record"}>
                  {templetNoRecord ? templetNoRecord() : "No record found"}
                </li>
              )}
            </ul>
            {/* //? Footer for drop box. */}
            <div className="drop-footer"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownListComponent;
