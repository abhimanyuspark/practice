import React, { useRef, useState } from "react";
import ClickOutside from "../../utilities/ClickOutside";
import { FilterContainer } from "./animationStyles";
import { Button } from "antd";

const FilterAnimation = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const parentRef = useRef();

  const clickOutsideHandler = () => {
    setFilterVisible(false);
  };
  ClickOutside(clickOutsideHandler, parentRef);

  return (
    <div ref={parentRef}>
      <Button
        onClick={() => {
          setFilterVisible(!filterVisible);
        }}
      >
        Toggle Filter
      </Button>
      <FilterContainer className={filterVisible ? "in" : "out"}>
        <button onClick={clickOutsideHandler}>X</button>Filter
      </FilterContainer>
    </div>
  );
};

export default FilterAnimation;
