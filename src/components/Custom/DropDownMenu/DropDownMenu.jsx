import React, { useRef, useState } from "react";
import { DropMenu, Menu, MenuLi, MenuUl } from "./MenuStyle";
import ClickOutside from "../../../utilities/ClickOutside";

const DropDownMenu = ({ data, onSubmitLi, id }) => {
  const [show, setShow] = useState(false);
  const dropRef = useRef(null);
  const handelShow = () => {
    setShow(!show);
  };
  const handelLi = (d) => {
    const ID = id ? id : "pass id here";
    onSubmitLi(d, ID);
    handelShow();
  };
  const outSides = () => {
    setShow(false);
  };
  ClickOutside(outSides, dropRef);

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
