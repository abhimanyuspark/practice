import React, { useEffect, useRef, useState } from "react";
import { DropMenu, Menu, MenuLi, MenuUl } from "./MenuStyle";

const DropDownMenu = ({ data, onSubmitLi, id }) => {
  const [show, setShow] = useState(false);
  const dropRef = useRef(null);
  const handelShow = () => {
    setShow(!show);
  };
  const handelLi = (d) => {
    onSubmitLi(d, id);
    handelShow();
  };
  useEffect(() => {
    let handler = (e) => {
      if (!dropRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <DropMenu ref={dropRef}>
      <Menu
        onClick={() => {
          handelShow();
        }}
      >
        <span className="material-symbols-outlined">more_vert</span>
      </Menu>
      <MenuUl $display={show}>
        {data?.map((d, i) => {
          return (
            <MenuLi
              key={i}
              onClick={() => {
                handelLi(d.name);
              }}
            >
              <span>{d?.icon}</span>
              <span>{d?.name}</span>
            </MenuLi>
          );
        })}
      </MenuUl>
    </DropMenu>
  );
};

export default DropDownMenu;
