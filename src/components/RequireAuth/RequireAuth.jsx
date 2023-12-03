import React, { useEffect, useMemo } from "react";
import { useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "../../pages/Layout/Layout";
import { useDispatch } from "react-redux";
import { getAuthUser } from "../../Redux/LoginApi/LoginApi";

const RequireAuth = ({ roleAccess = [] }) => {
  const location = useLocation();
  const user = useMemo(() => JSON.parse(Cookies.get("user")), []);
  const dispatch = useDispatch();

  if (user) {
    useEffect(() => {
      dispatch(getAuthUser(user.name));
    }, [dispatch, user.name]);

    if (roleAccess.length === 0 || roleAccess.includes(user.role)) {
      return <Layout />;
    } else {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
