import styled from "styled-components";

export const Filterbutton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: grey;
  & span {
    font-size: 22px;
  }
  &:hover {
    color: ${(props) => props.theme.cl_dark};
  }
`;

export const FilterContainer = styled.div`
  background-color: ${(props) => props.theme.bg_cl};
  border: 1px solid grey;
  height: calc(100vh - 60px);
  position: fixed;
  right: 0;
  top: 60px;
  width: 260px;
  z-index: 9;
  transition: all 0.2s ease-in-out;
  &.in {
    transform: translateZ(0px);
  }
  &.out {
    transform: translate3d(260px, 0, 0);
  }
`;

export const BlackBackground = styled.div`
  background-color: black;
  position: ${({ $position }) => $position || "fixed"};
  top: 0;
  left: 0;
  width: ${({ $width }) => $width || "100vw"};
  height: ${({ $height }) => $height || "100vh"};
  opacity: 0.3; /* Adjust the opacity as needed */
  z-index: 5; /* Make sure it's below FilterContainer */
`;
