import React from "react";
import { FlexDiv, NavbarWrapper, RNavLink } from "../../style/Export/Export";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/LoginApi/LoginApi";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import Swal from "sweetalert2";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [theme] = useThemeProvider();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/login", { replace: true }); // Redirect to the login page
      }
    });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const ThemeProvider = () => {
  const [theme, toogler] = useThemeProvider();
  return <button onClick={toogler}>theme: {theme ? "light" : "dark"}</button>;
};

const Navbar = () => {
  return (
    <NavbarWrapper>
      <FlexDiv>
        <RNavLink to="/">Home</RNavLink>
      </FlexDiv>
      <FlexDiv>
        <UserProfile />
        <ThemeProvider />
      </FlexDiv>
    </NavbarWrapper>
  );
};

export default Navbar;
