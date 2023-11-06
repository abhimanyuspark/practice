import React from "react";
import { SidebarWrapper } from "../../style/Export/Export";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/Redux-Sidebar/ReduxSidebar";

const Sidebar = () => {
  const { sideBar } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleToogle = () => {
    // console.log(sideBar);
    dispatch(toggleSidebar(!sideBar));
  };
  return (
    <SidebarWrapper>
      <div
        style={{
          width: "100%",
          height: "50px",
          background: "red",
        }}
      >
        <button onClick={handleToogle}>toogle</button>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
