import React, { useState } from "react";
import {
  SideChild,
  SideFooter,
  SideHeader,
  SidebarWrapper,
} from "../../style/Export/Export";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/Redux-Layout/ReduxLayout";
import SideMenu from "./SideMenu";
import Cookies from "js-cookie";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const { sideBar } = useSelector((state) => state.layout);
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
      <Header sideBar={sideBar} expanded={expanded} />
      <SideChild onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <SideMenu sideBar={sideBar} />
      </SideChild>
      <Footer sideBar={sideBar} toogle={handleToogle} />
    </SidebarWrapper>
  );
};

const Header = ({ sideBar, expanded }) => {
  const user = JSON.parse(Cookies.get("user"));

  return (
    <SideHeader>
      <div
        className={`header ${!sideBar ? (expanded === false ? "hs" : "") : ""}`}
      >
        <div className="opa practice">
          <h4>{user?.name}</h4>
          <h5>Practice</h5>
        </div>
        <div className="div profile">
          <img src={user?.profile} alt="profile" />
        </div>
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
