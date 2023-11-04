import styled from "styled-components";
import image from "../../assets/liquid-cheese-blue.svg";

export const NavbarWrapper = styled.div`
  grid-area: navbar;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const SidebarWrapper = styled.div`
  grid-area: sidebar;
  background-color: #555;
  color: #fff;
  padding: 1rem;
`;

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar navbar"
    "sidebar dashboard";
  height: 100vh;
`;

export const DashboardWrapper = styled.div`
  grid-area: dashboard;
  color: #000;
  padding: 1rem;
  overflow: auto; /* Add overflow property for scrolling */
  height: calc(100vh - 60px);
  background: url(${image});
  background-size: cover;
  background-repeat: no-repeat; /* Set a fixed height, minus navbar height */
`;
