import React, { useState } from "react";
// import ClickOutside from "../../utilities/ClickOutside";
import { BlackBackground, FilterContainer } from "./animationStyles";
import {
  FlexDiv,
  H3,
  Icon,
  JustifyWrapper,
  Overflow,
  PaddingContainer,
  P,
} from "../Export/Export";
import { Close, Filter } from "../Icons/Icons";

const FilterAnimation = ({ children }) => {
  const [filterVisible, setFilterVisible] = useState(false);

  const clickOutsideHandler = () => {
    setFilterVisible(false);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <FlexDiv
        $gap="0.5"
        onClick={() => {
          setFilterVisible(!filterVisible);
        }}
      >
        <P $hover="grey" $size="15px">
          Filter
        </P>
        <Icon icon={Filter} hover={"grey"} />
      </FlexDiv>
      {filterVisible && <BlackBackground onClick={clickOutsideHandler} />}
      <FilterContainer className={filterVisible ? "in" : "out"}>
        <PaddingContainer $padding="15px 20px">
          <JustifyWrapper>
            <H3>Filter</H3>
            <Icon onClick={clickOutsideHandler} hover={"grey"} icon={Close} />
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
