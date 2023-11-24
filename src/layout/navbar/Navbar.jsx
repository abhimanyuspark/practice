import React from "react";
import { FlexDiv, NavbarWrapper, RNavLink } from "../../style/Export/Export";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/LoginApi/LoginApi";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      dispatch(logout());
    }
    navigate("/login", { replace: true }); // Redirect to the login page
  };

  return (
    <div>
      {/* Your profile content */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const Navbar = () => {
  return (
    <NavbarWrapper>
      <FlexDiv>
        <RNavLink to="/">Home</RNavLink>
      </FlexDiv>
      <div>
        <UserProfile />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
