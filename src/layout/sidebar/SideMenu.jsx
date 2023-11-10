import React, { useState, useEffect } from "react";
import { SideBarMenuData as data } from "./SideBarMenuData";
import { SideChildItem } from "../../style/Export/Export";
import { NavLink, useLocation } from "react-router-dom";

const SideMenu = ({ sideBar }) => {
  const [activeChildIndex, setActiveChildIndex] = useState(null);
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  const handleIndex = (i) => {
    setActiveChildIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  const isChildActive = (i) => {
    const currentSubMenu = data[i].subMenu;
    return currentSubMenu && currentSubMenu.some((item) => item.link === path);
  };

  useEffect(() => {
    if (sideBar === false) {
      setActiveChildIndex(null);
    }
  }, [sideBar]);

  useEffect(() => {
    const l = location.pathname;
    setPath(l);

    // Logic to set activeChildIndex based on path and subMenu
    for (let i = 0; i < data.length; i++) {
      const currentSubMenu = data[i].subMenu;
      if (currentSubMenu && currentSubMenu.some((item) => item.link === l)) {
        setActiveChildIndex(i);
        return; // Exit loop once found
      }
    }
    setActiveChildIndex(null); // Reset if no match found
  }, [location.pathname]);

  return (
    <>
      {data.map((d, i) => (
        <SideChildItem key={i}>
          <div
            className={`child ${isChildActive(i) ? "active" : ""}`}
            onClick={() => {
              handleIndex(i);
            }}
          >
            {d.link ? (
              <NavLink to={d.link} className="smlink">
                <DivGap d={d} />
              </NavLink>
            ) : (
              <Div d={d} i={i} index={activeChildIndex} />
            )}
          </div>
          {activeChildIndex === i && d.subMenu && (
            <div className="subMenu">
              {d.subMenu.map((s, si) => (
                <div key={si}>
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

const Div = ({ d, i, index }) => {
  return (
    <div className="smsimple">
      <DivGap d={d} />
      <span
        className={`material-symbols-outlined arrow ${
          index === i ? "open" : "close"
        }`}
      >
        chevron_right
      </span>
    </div>
  );
};

const DivGap = ({ d }) => {
  return (
    <div className="smgap">
      {d.icon && d.icon}
      <span>{d.value}</span>
    </div>
  );
};

export default SideMenu;
