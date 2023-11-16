import styled from "styled-components";
import image from "../../assets/liquid-cheese-blue.svg";

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ $width }) => ($width ? "240px 1fr" : "60px 1fr")};
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar navbar"
    "sidebar dashboard";
  transition: all 0.3s ease-in-out;
  height: 100vh;
`;

export const DashboardWrapper = styled.main`
  grid-area: dashboard;
  padding: 1rem;
  overflow: auto; /* Add overflow property for scrolling */
  height: calc(100vh - 60px); /* Set a fixed height, minus navbar height */
  background: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const NavbarWrapper = styled.nav`
  grid-area: navbar;
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const SidebarWrapper = styled.aside`
  --_color: grey;
  --_border: #535353;
  grid-area: sidebar;
  background-color: #333;
  transition: all 0.3s ease-in-out;
  z-index: 9;
  border-right: 1px solid var(--_border);
  width: ${({ $expanded }) => ($expanded ? "240px" : "100%")};
`;

export const SideHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid var(--_border);
  color: var(--_color);
  display: flex;
  align-items: center;
  padding: 0px 10px;
  & .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .hs {
      justify-content: center;
    }
    & h4 {
      transition: all 1s ease-in-out;
      opacity: 1;
      &.practice {
        opacity: 0;
        display: none;
      }
    }
    & span {
      padding: 4px 10px;
      background-color: grey;
      border-radius: 0.3rem;
      color: white;
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
  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
    border: 1px solid grey;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #333;
    border: 1px solid grey;
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
      transition: all 0.1s ease;
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
      transition: all 0.5s ease;
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
      transition: all 1s ease-in-out;
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
