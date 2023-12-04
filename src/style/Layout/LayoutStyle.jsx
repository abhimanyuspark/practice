import styled, { css } from "styled-components";
import image from "../../assets/liquid-cheese-blue.svg";

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ $width }) => ($width ? "240px 1fr" : "60px 1fr")};
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar navbar"
    "sidebar dashboard";
  transition: 0.3s ease-in-out;
  height: 100vh;
  ::-webkit-scrollbar {
    width: 11px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.lt_bg_cl};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.lt_br};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: grey;
    border: 1px solid grey;
  }
`;

export const DashboardWrapper = styled.main`
  position: relative;
  grid-area: dashboard;
  background-color: ${(props) => props.theme.bg_cl};
  overflow: auto; /* Add overflow property for scrolling */
  height: calc(100vh - 60px); /* Set a fixed height, minus navbar height */
  /* background: url(${image}); */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
`;

export const NavbarWrapper = styled.nav`
  grid-area: navbar;
  background-color: ${(props) => props.theme.lt_bg_cl};
  color: ${(props) => props.theme.lt_cl};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  background-color: ${(props) => props.theme.lt_bg_cl};
  --_color: ${(props) => props.theme.lt_cl};
  --_border: ${(props) => props.theme.lt_br};
  z-index: ${({ $expanded }) => ($expanded ? "5" : "3")};
  transition: all 0.3s ease-in-out;
  border-right: 1px solid var(--_border);
  width: ${({ $expanded }) => ($expanded ? "240px" : "100%")};
`;

export const SideHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid var(--_border);
  color: white;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  & .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .opa {
      opacity: 1;
      transition: 0.5s ease-in;
    }
    &.hs {
      & .practice {
        opacity: 0;
        position: absolute;
      }
      & .profile {
        /* position: absolute; */
        z-index: 5;
      }
    }
    & .div {
      width: 40px;
      height: 40px;
      background-color: grey;
      border-radius: 0.3rem;
      color: white;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const SideChild = styled.ul`
  height: calc(100vh - 110px);
  overflow-y: scroll;
  overflow-x: hidden;
  list-style-type: none;
  color: var(--_color);
  &::-webkit-scrollbar {
    width: 8px;
  }
`;

export const SideChildItem = styled.li`
  border-bottom: 1px solid var(--_border);
  cursor: pointer;
  user-select: none;
  & .child > div,
  & .child > a {
    color: var(--_color);
  }
  & .active > div,
  & .active > a {
    color: white;
  }
  & .smsimple,
  & .smlink.active {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover,
    &.active {
      color: white;
    }
    & .arrow {
      font-size: 22px;
      transition: 0.1s ease;
      &.open {
        transform: rotate(90deg);
      }
      &.close {
        transform: rotate(0deg);
      }
    }
  }
  & .smlink,
  & .subMenuLink {
    padding: 12px 15px;
    display: block;
    text-decoration: none;
    color: var(--_color);
    &:hover,
    &.active {
      color: white;
    }
  }
  & .smgap {
    display: flex;
    align-items: center;
    gap: 1rem;
    & span:first-child {
      font-size: 20px;
    }
    & span:last-child {
      width: max-content;
      font-size: 15px;
    }
  }
  & .subMenu,
  & .subMenuLink {
    padding-bottom: 10px;
    &:hover {
      color: white;
    }
  }
  & .subMenuBar,
  & .subMenuLink {
    padding: 6px 0px 6px 55px;
    font-size: 14px;
    /* width: max-content; */
  }
`;

export const SideFooter = styled.div`
  height: 50px;
  border-top: 1px solid var(--_border);
  display: flex;
  align-items: center;
  & span {
    cursor: pointer;
  }
  & .footer {
    width: 100%;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--_color);
    & span:first-child {
      font-size: 16px;
      transition: 0.5s ease;
      width: 10px;
      &:hover {
        color: white;
      }
      &.rotate {
        transform: rotate(180deg);
      }
    }
    & .spanv {
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 0.3rem;
      transition: 1s ease-in-out;
      opacity: 1;
      &:hover {
        background-color: grey;
        color: white;
      }
      &.hidden {
        opacity: 0;
        z-index: -9;
        display: none;
      }
    }
  }
  & .fs {
    justify-content: center;
  }
`;

export const SubNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: ${(props) => props.theme.bg_cl};
  width: 100%;
  height: 52px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
`;

export const SubNavbarChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  ${({ $borderDir }) =>
    $borderDir
      ? css`
          border-left: 1px solid grey;
        `
      : css`
          border-right: 1px solid grey;
        `}
`;
