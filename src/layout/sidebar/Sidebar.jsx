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
    return dispatch(toggleSidebar(!sideBar));
  };

  const handleEnter = () => {
    if (sideBar === false) {
      setExpanded(true);
    }
  };
  const handleLeave = () => {
    if (sideBar === false) {
      setExpanded(false);
    }
  };

  return (
    <SidebarWrapper $expanded={expanded}>
      <SideHeader></SideHeader>
      <SideChild onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <SideMenu sideBar={sideBar} />
      </SideChild>
      <SideFooter>
        <button onClick={handleToogle}>toogle</button>
      </SideFooter>
    </SidebarWrapper>
  );
};

export default Sidebar;
