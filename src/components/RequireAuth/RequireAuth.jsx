import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "../../pages/Layout/Layout";

const RequireAuth = ({ roleAccess = [] }) => {
  const location = useLocation();
  //? Check for authentication cookies
  const userCookies = Cookies.get("user");

  //? Check if user is authenticated
  if (userCookies) {
    const user = JSON.parse(Cookies.get("user"));
    //TODO Check if the user has the required role access
    if (roleAccess.length === 0 || roleAccess.includes(user.role)) {
      //TODO Render the children if authenticated and has required role access
      return <Layout />;
    } else {
      //TODO Authenticated but doesn't have the required role access
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  } else {
    //? Not authenticated, redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
