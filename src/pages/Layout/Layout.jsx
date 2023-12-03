import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppWrapper, DashboardWrapper } from "../../style/Export/Export";
import Navbar from "../../layout/navbar/Navbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import { useSelector } from "react-redux";
// import Video from "./Video";

const Layout = () => {
  const { sideBar } = useSelector((state) => state.layout);

  return (
    <AppWrapper $width={sideBar}>
      <Navbar />
      <Sidebar />
      <DashboardWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Video /> */}
          <Outlet />
        </Suspense>
      </DashboardWrapper>
    </AppWrapper>
  );
};

export default Layout;
