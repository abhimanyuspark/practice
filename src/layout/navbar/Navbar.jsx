import React from "react";
import { FlexDiv, NavbarWrapper, RNavLink } from "../../style/Export/Export";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <FlexDiv>
        <RNavLink to="/">Home</RNavLink>
        <RNavLink to="/allbuttons">Buttons</RNavLink>
        <RNavLink to="/accordians">Accordians</RNavLink>
        <RNavLink to="/select">Select</RNavLink>
      </FlexDiv>
    </NavbarWrapper>
  );
};

export default Navbar;
