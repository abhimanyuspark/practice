import React from "react";
import { NavbarWrapper } from "../../style/Export/Export";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>
        <Link to="/">Home</Link>
        <Link to="/allbuttons">Buttons</Link>
        <Link to="/accordians">Accordians</Link>
        <Link></Link>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
