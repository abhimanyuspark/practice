import React, { useRef, useState } from "react";
import ClickOutside from "../../utilities/ClickOutside";
import { FilterContainer } from "./animationStyles";
import { Button } from "antd";
import {
  H3,
  Icon,
  JustifyWrapper,
  PaddingContainer,
  ScrollBar,
} from "../Export/Export";
import { Close } from "../Icons/Icons";

const FilterAnimation = ({ children }) => {
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
        <PaddingContainer $padding="15px 20px">
          <JustifyWrapper>
            <H3>Filter</H3>
            <Icon onClick={clickOutsideHandler} icon={Close} />
          </JustifyWrapper>
        </PaddingContainer>
        <ScrollBar $height="160px">{children}</ScrollBar>
        <PaddingContainer $padding="15px 10px">
          <JustifyWrapper $justify="end">
            <button>Clear</button>
          </JustifyWrapper>
        </PaddingContainer>
      </FilterContainer>
    </div>
  );
};

export default FilterAnimation;
