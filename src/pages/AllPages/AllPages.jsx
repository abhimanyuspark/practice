import React from "react";
import { AppWrapper, DashboardWrapper } from "../../style/Export/Export";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../layout/navbar/Navbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import Home from "../home/home";
import AllButtons from "../AllButtons/AllButtons";
import Accordians from "../../components/accordians/accordians";
import Form from "../../components/DropDown/Form";
import { useSelector } from "react-redux";

const AllPages = () => {
  const { sideBar } = useSelector((state) => state.sidebar);

  return (
    <AppWrapper $width={sideBar}>
      <Navbar />
      <Sidebar />
      <DashboardWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbuttons" element={<AllButtons />} />
          <Route path="/accordians" element={<Accordians />} />
          <Route path="/select" element={<Form />} />
          <Route path="*" element={<h1>Error 404 not found</h1>} />
        </Routes>
      </DashboardWrapper>
    </AppWrapper>
  );
};

export default AllPages;
