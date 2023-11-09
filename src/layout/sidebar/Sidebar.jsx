import React, { useState } from "react";
import {
  SideChild,
  SideFooter,
  SideHeader,
  SidebarWrapper,
} from "../../style/Export/Export";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/Redux-Sidebar/ReduxSidebar";
import SideMenu from "./SideMenu";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const { sideBar } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleToogle = () => {
    // console.log(sideBar);
    dispatch(toggleSidebar(!sideBar));
  };

  const handleMouse = () => {
    if (sideBar) {
      if (expanded) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    }
  };

  return (
    <SidebarWrapper $expanded={expanded}>
      <SideHeader></SideHeader>
      <SideChild onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
        <SideMenu />
      </SideChild>
      <SideFooter>
        <button onClick={handleToogle}>toogle</button>
      </SideFooter>
    </SidebarWrapper>
  );
};

export default Sidebar;
