import React, { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";
import ClickOutside from "../../../utilities/ClickOutside";

function Select({
  multiple = false,
  value,
  onChange,
  options,
  singleTemplate,
  optionTemplate,
  multiTemplate,
  enableSearch = true,
  clearButton = true,
  divider = true,
  enableNoDataList = true,
  fields,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const parentRef = useRef(null);

  const CustomFields = (option) =>
    fields?.labelfun ? fields.labelfun(option) : option.label;

  const clearOptions = () => {
    onChange(multiple ? [] : undefined);
  };

  const selectOption = (option) => {
    if (multiple) {
      onChange(
        value.includes(option)
          ? value.filter((o) => o !== option)
          : [...value, option]
      );
    } else {
      if (option !== value) {
        onChange(option);
        setIsOpen(false);
      }
    }
  };

  const isOptionSelected = (option) =>
    multiple ? value.includes(option) : option === value;

  const filterOptions = options.filter((o) =>
    CustomFields(o).toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  const outsideClickHandler = () => {
    setIsOpen(false);
    setQuery("");
  };
  ClickOutside(outsideClickHandler, parentRef);

  return (
    <div ref={parentRef} className={styles["main-container"]}>
      <div
        tabIndex={0}
        className={styles.container}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.value}>
          {multiple
            ? value?.length > 0
              ? value.map((v, i) => (
                  <div
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectOption(v);
                    }}
                    className={styles["option-badge"]}
                  >
                    {multiTemplate ? multiTemplate(v) : CustomFields(v)}
                    <span className={styles["remove-btn"]}>&times;</span>
                  </div>
                ))
              : "Search value..."
            : singleTemplate
            ? singleTemplate(value)
            : value
            ? CustomFields(value)
            : "Search value..."}
        </span>
        {clearButton && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              clearOptions();
            }}
            className={styles["clear-btn"]}
          >
            &times;
          </div>
        )}
        {divider && <div className={styles.divider}></div>}
        <div className={styles.caret}></div>
      </div>

      <div className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {enableSearch && (
          <div className={styles["search-bar-container"]}>
            <input
              className={styles["search-bar"]}
              type="text"
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search here..."
            />
          </div>
        )}
        {multiple && (
          <div className={styles["multi-btns-container"]}>
            <div
              onClick={() => onChange([...options])}
              className={styles["multi-btns"]}
            >
              Select All
            </div>
            <div onClick={() => onChange([])} className={styles["multi-btns"]}>
              Deselect All
            </div>
          </div>
        )}
        <ul className={styles.overflow}>
          {enableNoDataList && !multiple && filterOptions.length > 0 && (
            <li
              className={`${styles.option} ${
                value === undefined ? styles.selected : ""
              }`}
              onClick={() => {
                clearOptions();
                setIsOpen(false);
              }}
            >
              No Data Selected
            </li>
          )}
          {filterOptions.length > 0 ? (
            filterOptions.map((option, index) => (
              <li
                onClick={() => selectOption(option)}
                key={index}
                className={`${styles.option} ${
                  isOptionSelected(option) ? styles.selected : ""
                }`}
              >
                {optionTemplate ? optionTemplate(option) : CustomFields(option)}
              </li>
            ))
          ) : (
            <li className={styles["No-option-found"]}>No data found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Select;
