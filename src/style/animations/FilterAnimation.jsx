import React, { useState } from "react";
// import ClickOutside from "../../utilities/ClickOutside";
import { BlackBackground, FilterContainer } from "./animationStyles";
import { Button } from "antd";
import {
  H3,
  Icon,
  JustifyWrapper,
  Overflow,
  PaddingContainer,
} from "../Export/Export";
import { Close } from "../Icons/Icons";

const FilterAnimation = ({ children }) => {
  const [filterVisible, setFilterVisible] = useState(false);

  const clickOutsideHandler = () => {
    setFilterVisible(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setFilterVisible(!filterVisible);
        }}
      >
        Toggle Filter
      </Button>
      {filterVisible && <BlackBackground onClick={clickOutsideHandler} />}
      <FilterContainer className={filterVisible ? "in" : "out"}>
        <PaddingContainer $padding="15px 20px">
          <JustifyWrapper>
            <H3>Filter</H3>
            <Icon onClick={clickOutsideHandler} icon={Close} />
          </JustifyWrapper>
        </PaddingContainer>
        <Overflow $height="160px" $overFlow="auto">
          {children}
        </Overflow>
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
