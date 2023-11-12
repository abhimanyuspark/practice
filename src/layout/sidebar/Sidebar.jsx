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
      <Header sideBar={sideBar} />
      <SideChild onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <SideMenu sideBar={sideBar} />
      </SideChild>
      <Footer sideBar={sideBar} toogle={handleToogle} />
    </SidebarWrapper>
  );
};

const Header = ({ sideBar }) => {
  return (
    <SideHeader>
      <div className={`header ${!sideBar ? "hs" : ""}`}>
        <h4 className={`${!sideBar ? "practice" : ""}`}>Practice</h4>
        <span className={`${!sideBar ? "p" : ""}`}>P</span>
      </div>
    </SideHeader>
  );
};

const Footer = ({ sideBar, toogle }) => {
  return (
    <SideFooter>
      <div className={`footer ${!sideBar ? "fs" : ""}`}>
        <span
          className={`material-symbols-outlined ${!sideBar && "rotate"}`}
          onClick={toogle}
        >
          arrow_back_ios
        </span>
        <span className={`spanv ${!sideBar ? "hidden" : ""}`}>
          Version 0.0.1
        </span>
      </div>
    </SideFooter>
  );
};

export default Sidebar;
