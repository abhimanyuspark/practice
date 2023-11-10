import styled from "styled-components";
import image from "../../assets/liquid-cheese-blue.svg";

export const AppWrapper = styled.div`
  display: grid;
  transition: all 0.5s ease;
  grid-template-columns: ${({ $width }) => ($width ? "240px 1fr" : "60px 1fr")};
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar navbar"
    "sidebar dashboard";
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
  grid-area: sidebar;
  background-color: #333;
  transition: all 0.5s ease;
  z-index: 9;
  width: ${({ $expanded }) => ($expanded ? "240px" : "100%")};
`;

export const SideHeader = styled.div`
  height: 60px;
  background-color: grey;
`;

export const SideChild = styled.ul`
  height: calc(100vh - 120px);
  overflow-y: scroll;
  overflow-x: hidden;
  list-style-type: none;
  color: grey;
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(1, 1, 122);
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
  border-bottom: 1px solid grey;
  cursor: pointer;
  user-select: none;
  & .child > div,
  & .child > a {
    color: grey;
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
      transition: all 0.3s ease;
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
    color: grey;
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
    padding: 6px 0px 6px 50px;
    font-size: 14px;
    /* width: max-content; */
  }
`;

export const SideFooter = styled.div`
  height: 60px;
  background-color: grey;
`;
