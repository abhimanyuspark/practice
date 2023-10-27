import styled, { css } from "styled-components";

export const DropMenu = styled.div`
  position: relative;
  display: inline-block; /* Make sure it behaves correctly with its surroundings */
`;

export const Menu = styled.div`
  border: 1px solid black;
  border-radius: 0.2rem;
  width: 30px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & span {
    font-size: 20px;
  }
`;

export const MenuUl = styled.ul`
  width: 120px;
  border: 1px solid black;
  border-radius: 0.2rem;
  padding: 5px 0px;
  list-style: none;
  position: absolute;
  z-index: 9;
  margin-top: 5px;
  top: 100%; /* Set the dropdown to appear below the menu */
  right: 0; /* Position it at the right */
  /* You can customize further (e.g., left, bottom) if needed */
  background-color: white;
  ${({ $display }) =>
    $display
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export const MenuLi = styled.li`
  padding: 7px 10px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & .material-symbols-outlined {
    font-size: 20px;
  }
  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
`;
