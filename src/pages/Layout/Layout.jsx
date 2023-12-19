import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppWrapper, DashboardWrapper } from "../../style/Export/Export";
import Navbar from "../../layout/navbar/Navbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import { useSelector } from "react-redux";
// import Video from "./Video";
import Loader from "../../style/loader/Loader";

const Layout = () => {
  const { sideBar } = useSelector((state) => state.auth.user);

  return (
    <AppWrapper $width={sideBar}>
      <Navbar />
      <Sidebar sideBar={sideBar} />
      <DashboardWrapper>
        <Suspense fallback={<Loader />}>
          {/* <Video /> */}
          <Outlet />
        </Suspense>
      </DashboardWrapper>
    </AppWrapper>
  );
};

export default Layout;
