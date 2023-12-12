import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import { useSelector } from "react-redux";

const RequireAuth = ({ roleAccess = [] }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  if (user !== undefined && Object.keys(user).length > 0 && user) {
    if (roleAccess.length === 0 || roleAccess.includes(user?.role)) {
      return <Layout />;
    } else {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
