import styled, { css } from "styled-components";

export const DropMenu = styled.div`
  position: relative;
  display: inline-block; /* Make sure it behaves correctly with its surroundings */
`;

export const Menu = styled.div`
  border: 1px solid grey;
  user-select: none;
  border-radius: 0.3rem;
  display: flex;
  padding: 5px 2px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & span {
    font-size: 20px;
    color: ${(props) => props.theme.cl_dark};
  }
  &:hover,
  &:focus {
    outline: 2px solid ${(props) => props.theme.bt_bg};
    outline-offset: 1px;
  }
`;

export const MenuUl = styled.ul`
  width: 120px;
  border: 1px solid grey;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.2rem;
  padding: 5px 0px;
  list-style: none;
  position: absolute;
  z-index: 3;
  margin-top: 7px;
  top: 100%; /* Set the dropdown to appear below the menu */
  right: 0; /* Position it at the right */
  /* You can customize further (e.g., left, bottom) if needed */
  background-color: ${(props) => props.theme.bg_cl};
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
  /* text-align: left; */
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.cl_dark};
  gap: 0.5rem;
  font-size: 14px;
  & span {
    display: flex;
    align-items: center;
  }
  & .material-symbols-outlined {
    font-size: 20px;
  }
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.bt_bg};
    color: ${(props) => props.theme.cl_light};
  }
`;
