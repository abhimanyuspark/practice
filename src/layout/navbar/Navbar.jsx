import React from "react";
import { FlexDiv, NavbarWrapper, RNavLink } from "../../style/Export/Export";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/LoginApi/reducer";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import Swal from "sweetalert2";
import { notification } from "antd";

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
  const [api, contextHolder] = notification.useNotification();
  const [theme, toogler] = useThemeProvider();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Theme Changes",
      duration: 1,
    });
  };

  const handle = () => {
    toogler();
    openNotificationWithIcon("success");
  };

  return (
    <>
      {contextHolder}{" "}
      <button onClick={handle}>theme: {theme ? "light" : "dark"}</button>
    </>
  );
};

const Navbar = () => {
  return (
    <NavbarWrapper>
      <FlexDiv>
        <RNavLink to="/">Dashboard</RNavLink>
      </FlexDiv>
      <FlexDiv>
        <UserProfile />
        <ThemeProvider />
      </FlexDiv>
    </NavbarWrapper>
  );
};

export default Navbar;
