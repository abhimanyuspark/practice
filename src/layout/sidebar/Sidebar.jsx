import React, { useState, memo } from "react";
import {
  FlexDiv,
  Shape,
  SideChild,
  SideFooter,
  SideHeader,
  SidebarWrapper,
} from "../../style/Export/Export";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/LoginApi/reducer";
import { changeSideBar } from "../../Redux/LoginApi/LoginApi";
import SideMenu from "./SideMenu";
import useInternetCheck from "../../hooks/useInternetCheck";

const Sidebar = ({ sideBar }) => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [expanded, setExpanded] = useState(false);
  const { id } = user;

  const dispatch = useDispatch();

  const handleToogle = () => {
    const side = !sideBar;
    dispatch(toggleSidebar(side));
    dispatch(changeSideBar({ id, side }));
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
      <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <Header user={user} sideBar={sideBar} expanded={expanded} />
        <SideChild>
          <SideMenu sideBar={sideBar} />
        </SideChild>
      </div>
      <Footer sideBar={sideBar} toogle={handleToogle} />
    </SidebarWrapper>
  );
};

const Header = memo(({ user, sideBar, expanded }) => {
  const isOnline = useInternetCheck();

  return (
    <SideHeader>
      <div
        className={`header ${!sideBar ? (expanded === false ? "hs" : "") : ""}`}
      >
        <div className="opa practice">
          <h4>Practice</h4>
          <FlexDiv $gap="0.4">
            <Shape $circle $color={isOnline ? "#0cf90c" : "red"} />
            <h5>{user?.name}</h5>
          </FlexDiv>
        </div>
        <div className="div profile">
          <img src={user?.profile} alt="profile" />
        </div>
      </div>
    </SideHeader>
  );
});

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
