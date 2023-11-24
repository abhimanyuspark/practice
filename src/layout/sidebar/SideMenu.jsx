import React, { useState, useEffect, useCallback } from "react";
import { SideBarMenuData as data } from "./SideBarMenuData";
import { SideChildItem } from "../../style/Export/Export";
import { NavLink, useLocation } from "react-router-dom";

const SideMenu = ({ sideBar }) => {
  const [activeChildIndex, setActiveChildIndex] = useState(0);
  const { pathname } = useLocation();
  // console.log("side");
  const Main = useCallback((d, i, index) => {
    return <MainDiv d={d} i={i} index={index} />;
  }, []);

  const handleIndex = (i) => {
    setActiveChildIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  const isChildActive = (i, path) => {
    const currentSubMenu = data[i].subMenu;
    return currentSubMenu && currentSubMenu.some((item) => item.link === path);
  };

  useEffect(() => {
    if (sideBar === false) {
      setActiveChildIndex(null);
    }
  }, [sideBar]);

  useEffect(() => {
    const foundIndex = data.findIndex((d) => {
      const currentSubMenu = d.subMenu;
      return (
        currentSubMenu && currentSubMenu.some((item) => item.link === pathname)
      );
    });

    if (foundIndex !== -1) {
      setActiveChildIndex(foundIndex);
    } else {
      setActiveChildIndex(null);
    }
  }, [pathname]);

  return (
    <>
      {data?.map((d, i) => (
        <SideChildItem key={i}>
          <div
            className={`child ${isChildActive(i, pathname) ? "active" : ""}`}
            onClick={handleIndex.bind(null, i)}
          >
            {Main(d, i, activeChildIndex)}
          </div>
          {activeChildIndex === i && (
            <div className="subMenu">
              {d?.subMenu?.map((s, sub_index) => (
                <div key={sub_index}>
                  {s.link ? (
                    <NavLink className="subMenuLink" to={s.link}>
                      {s.value}
                    </NavLink>
                  ) : (
                    <div className="subMenuBar">{s.value}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </SideChildItem>
      ))}
    </>
  );
};

const MainDiv = ({ d, i, index }) => {
  const DivGap = (d) => (
    <div className="smgap">
      {d.icon && d.icon}
      <span>{d.value}</span>
    </div>
  );
  // console.log("sidemain");
  return (
    <>
      {d.link ? (
        <NavLink to={d.link} className="smlink">
          {DivGap(d)}
        </NavLink>
      ) : (
        <div className="smsimple">
          {DivGap(d)}
          <span
            className={`material-symbols-outlined arrow ${
              index === i ? "open" : "close"
            }`}
          >
            chevron_right
          </span>
        </div>
      )}
    </>
  );
};

export default SideMenu;
