import React, { useEffect, useRef, useState, memo, useMemo } from "react";
import styles from "./select.module.css";
import ClickOutside from "../../../utilities/ClickOutside";

const Select = memo(
  ({
    id = "",
    multiple = false,
    value,
    onChange,
    options,
    fields = { labelFn: (l) => l.label },
    singleTemplate,
    optionTemplate,
    multiTemplate,
    enableSearch = false,
    clearButton = false,
    divider = false,
    enableNoDataList = false,
    border = true,
    theme = true,
    selectWidth,
    optionsWidth,
    loading = false,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const searchRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
      if ((isOpen, enableSearch)) {
        searchRef?.current?.focus();
      }
    }, [isOpen, enableSearch]);

    const outsideClickHandler = () => {
      setIsOpen(false);
      setQuery("");
    };
    ClickOutside(outsideClickHandler, parentRef);

    const CustomFields = (option) =>
      fields ? fields.labelFn(option) : option?.label;

    const clearOptions = () => {
      onChange(multiple ? [] : "");
    };

    const selectOption = (option) => {
      if (multiple) {
        onChange(
          value.includes(option)
            ? value.filter((o) => CustomFields(o) !== CustomFields(option))
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
      multiple
        ? value.includes(option)
        : value === undefined
        ? option === value
        : CustomFields(option) === CustomFields(value);

    const filterOptions = useMemo(() => {
      return options?.filter((o) =>
        CustomFields(o)?.toLowerCase().includes(query.toLowerCase())
      );
    }, [options, query]);

    return (
      <div
        ref={parentRef}
        className={`${styles["main-container"]} ${
          theme ? styles["light-theme"] : styles["dark-theme"]
        }`}
        style={{ width: selectWidth || "100%" }}
      >
        <div
          id={id}
          tabIndex={0}
          className={`${border ? "" : styles.border} ${styles.container}`}
          onClick={() => {
            setIsOpen((prev) => !prev);
            setQuery("");
          }}
        >
          <span
            className={`${styles.value} ${
              multiple
                ? value?.length > 0
                  ? ``
                  : `${styles.notvalue}`
                : value
                ? ``
                : `${styles.notvalue}`
            }`}
          >
            {multiple
              ? value?.length > 0
                ? value?.map((v, i) => (
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
                : "--"
              : singleTemplate
              ? value
                ? singleTemplate(value)
                : "--"
              : value
              ? CustomFields(value)
              : "--"}
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

        <div
          style={{ width: optionsWidth || "100%" }}
          className={`${styles.options} ${isOpen ? styles.show : ""}`}
        >
          {enableSearch && (
            <div className={styles["search-bar-container"]}>
              <input
                className={styles["search-bar"]}
                type="text"
                name="search"
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
              <div
                onClick={() => onChange([])}
                className={styles["multi-btns"]}
              >
                Deselect All
              </div>
            </div>
          )}
          <ul className={styles.overflow}>
            {enableNoDataList && !multiple && filterOptions.length > 0 && (
              <li
                className={`${styles.option} ${value ? "" : styles.selected}`}
                onClick={() => {
                  clearOptions();
                  setIsOpen(false);
                }}
              >
                --
              </li>
            )}
            {filterOptions?.length > 0 ? (
              filterOptions?.map((option, index) => (
                <li
                  onClick={() => selectOption(option)}
                  key={index}
                  className={`${styles.option} ${
                    isOptionSelected(option) ? styles.selected : ""
                  }`}
                >
                  {optionTemplate
                    ? optionTemplate(option)
                    : CustomFields(option)}
                </li>
              ))
            ) : (
              <li className={styles["No-option-found"]}>--No data found--</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
);

export default Select;
