import styled from "styled-components";

export const FilterContainer = styled.div`
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

export const Div = styled.div`
  /* ... */
`;
