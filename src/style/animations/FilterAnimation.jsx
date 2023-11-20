import React, { useRef } from "react";
import ClickOutside from "../../utilities/ClickOutside";
import styled from "styled-components";

const FilterAnimation = React.memo(({ visible, setVisible }) => {
  const parentRef = useRef();

  const clickoutsidefun = () => {
    setVisible(false);
  };
  ClickOutside(clickoutsidefun, parentRef);

  return (
    <StyleFilter className={visible ? "in" : "out"} ref={parentRef}>
      Filter
    </StyleFilter>
  );
});

const StyleFilter = styled.div`
  background-color: #333;
  border-left: 1px solid grey;
  border-top: 0.2px solid grey;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  right: 0;
  top: 60px;
  width: 260px;
  z-index: 3;
  transition: all 0.3s ease-in-out;
  &.in {
    transform: translateZ(0);
  }
  &.out {
    transform: translate3d(260px, 0, 0);
  }
`;

export default FilterAnimation;
