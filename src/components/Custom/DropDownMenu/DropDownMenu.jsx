import React, { useState } from "react";
import { Menu, MenuUl } from "./MenuStyle";

const DropDownMenu = ({ data, onSubmitLi, id }) => {
  const [show, setShow] = useState(false);
  const handelShow = () => {
    setShow(!show);
  };
  const handelLi = (d) => {
    onSubmitLi(d, id);
  };

  return (
    <div>
      <Menu
        onClick={() => {
          handelShow();
        }}
      >
        Menu
      </Menu>
      <MenuUl $display={show}>
        {data?.map((d, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                handelLi(d.name);
              }}
            >
              <span>{d?.name}</span>
              <span>{d?.icon}</span>
            </li>
          );
        })}
      </MenuUl>
    </div>
  );
};

export default DropDownMenu;
