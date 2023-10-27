import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import "./dropdown.css";
import DropListItem from "./DropListItem";
import SelectItem from "./selectItem";

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
  if (!fields || (!fields.text && typeof fields.text !== "function") || !data) {
    return null;
  }

  const [show, setShow] = useState(false);
  const { text, sortText } = fields;
  const modified = useMemo(() => {
    return sorting
      ? [...data].sort((a, b) => {
          const textA = sortText
            ? typeof sortText === "function"
              ? sortText(a)
              : a[sortText]
            : typeof text === "function"
            ? text(a)
            : a[text];
          const textB = sortText
            ? typeof sortText === "function"
              ? sortText(b)
              : b[sortText]
            : typeof text === "function"
            ? text(b)
            : b[text];
          return textA.localeCompare(textB);
        })
      : data;
  }, [sorting]);

  const [selectedItems, setSelectedItems] = useState([modified[0]]);
  const [item, setItem] = useState(modified[0]);
  const [query, setQuery] = useState("");
  const dropRef = useRef();
  const searchRef = useRef(null);

  const handleShow = useCallback(() => {
    setShow(!show);
    setQuery("");
  }, [show]);

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

  const handleNoData = () => {
    setShow(false);
    setItem("");
  };

  const filterData = useMemo(() => {
    return modified.filter((d) => {
      const textValue = typeof text === "function" ? text(d) : d[text];
      return textValue && textValue.toLowerCase().includes(query.toLowerCase());
    });
  }, [modified, text, query]);

  const onItemSelectedCallback = useCallback(
    (select) => {
      if (onItemSelected) {
        onItemSelected(select);
      }
    },
    [onItemSelected]
  );

  useEffect(() => {
    const selectedItem = isMulti ? selectedItems : item;
    onItemSelectedCallback(selectedItem);
  }, [item, selectedItems, isMulti]);

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

  useEffect(() => {
    if (show && searchRef.current) {
      searchRef.current.focus();
    }
  }, [show]);

  const handleSelectAll = () => {
    setSelectedItems([...filterData]);
  };

  const handleDeselectAll = () => {
    setSelectedItems([]);
  };

  const it = useMemo(() => {
    return item ? (typeof text === "function" ? text(item) : item[text]) : "";
  }, [item, text]);

  useEffect(() => {
    if (defaultValue) {
      setSelectedItems(
        Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      );
      setItem(Array.isArray(defaultValue) ? "Accepts an object" : defaultValue);
    } else if (defaultValue === "") {
      setSelectedItems([]);
      setItem("");
    } else {
      setSelectedItems([modified[0]]);
      setItem(modified[0]);
    }
  }, [defaultValue]);

  return (
    <div
      ref={dropRef}
      className="drop-box"
      style={maxWidth ? { width: maxWidth } : { width: "400px" }}
    >
      {isMulti ? (
        <div className="drop-container">
          <div onClick={handleShow} className="templeteValue">
            <div className="multi-box">
              <SelectItem
                selectedItems={selectedItems}
                text={text}
                templeteValue={templeteValue}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="drop-container">
          {templeteValue ? (
            <div onClick={handleShow} className="templeteValue">
              {item === "" ? (
                <div style={{ padding: "5px" }}>{"--"}</div>
              ) : (
                templeteValue(item)
              )}
            </div>
          ) : (
            <>
              {templetValueNodata ? (
                <div
                  className="templeteValue"
                  onClick={handleShow}
                  style={{ padding: "10px" }}
                >
                  {templetValueNodata()}
                </div>
              ) : (
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
      <div className={`${show ? "show" : "hidden"} drop-list`}>
        {search && (
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
        {isMulti && (
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
          className={`${show ? "show" : "hidden"}`}
          style={maxHeight ? {"--h": maxHeight} : {"--h": "300px"}}
        >
          {!isMulti && enableNoDataRow && (
            <li
              className={item === "" ? "active" : ""}
              onClick={() => {
                handleNoData();
              }}
            >
              {templetItemNodata ? templetItemNodata() : "--"}
            </li>
          )}
          <DropListItem
            it={it}
            text={text}
            isMulti={isMulti}
            filterData={filterData}
            templetItem={templetItem}
            selectedItems={selectedItems}
            templetNoRecord={templetNoRecord}
            handleChange={handleChange}
          />
        </ul>
        <div className="drop-footer"></div>
      </div>
    </div>
  );
};

export default DropDownListComponent;
