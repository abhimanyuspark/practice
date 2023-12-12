// PersistenceAuth.js
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { refreshAuthUser } from "../../Redux/LoginApi/LoginApi";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "../../style/loader/Loader";
import { useNavigate } from "react-router-dom";

const PersistenceAuth = () => {
  const auth = Cookies.get("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  if (auth) {
    const user = useMemo(() => JSON.parse(auth), []);
    useEffect(() => {
      let mounted = true;

      const refresh = async (username) => {
        try {
          await dispatch(refreshAuthUser(username));
        } catch (err) {
          console.error("Error refreshing user data:", err);
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      };

      if (user?.name && user?.persist) {
        refresh(user?.name);
      } else {
        setLoading(false);
        // Redirect to login page if username or persist flag is missing
        navigate("/login", { state: { error: true }, replace: true });
      }

      return () => {
        mounted = false;
      };
    }, [dispatch, navigate, user]);

    return loading ? <Loader height="0px" /> : <Outlet />;
  } else {
    return <Outlet />;
  }
};

export default PersistenceAuth;
