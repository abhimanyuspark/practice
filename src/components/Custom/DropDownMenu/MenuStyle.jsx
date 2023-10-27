import styled, { css } from "styled-components";

export const Menu = styled.div`
  border: 1px solid black;
  position: relative;
  padding: 10px;
`;
export const MenuUl = styled.div`
  border: 1px solid black;
  padding: 10px;
  list-style: none;
  position: absolute;
  ${({ $display }) =>
    $display
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;


