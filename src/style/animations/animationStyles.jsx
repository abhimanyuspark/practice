import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: ${(props) => props.theme.bg_cl};
  border: 1px solid grey;
  height: calc(100vh - 60px);
  position: fixed;
  right: 0;
  top: 60px;
  width: 260px;
  z-index: 9;
  transition: all 0.3s ease-in-out;
  &.in {
    transform: translateZ(0px);
  }
  &.out {
    transform: translate3d(260px, 0, 0);
  }
`;
