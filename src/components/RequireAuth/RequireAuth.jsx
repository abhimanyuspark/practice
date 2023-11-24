import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import Cookies from "js-cookie";

const RequireAuth = () => {
  const location = useLocation();
  // Check for authentication cookies
  const isAuthenticated = Cookies.get("user") !== undefined;

  return isAuthenticated ? (
    <Layout />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
