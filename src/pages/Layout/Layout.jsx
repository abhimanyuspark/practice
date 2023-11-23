import React from "react";
import { Outlet } from "react-router-dom";
import { AppWrapper, DashboardWrapper } from "../../style/Export/Export";
import Navbar from "../../layout/navbar/Navbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import { useSelector } from "react-redux";
// import Video from "./Video";

const Layout = () => {
  const { sideBar } = useSelector((state) => state.sidebar);

  return (
    <AppWrapper $width={sideBar}>
      <Navbar />
      <Sidebar />
      <DashboardWrapper>
        {/* <Video /> */}
        <Outlet />
      </DashboardWrapper>
    </AppWrapper>
  );
};

export default Layout;
