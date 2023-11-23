import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../Redux/LoginApi/LoginApi";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const username = "Mae Feeney";
  const password = "txE7RYblCrMVd6s";
  const obj = {
    username,
    password,
  };

  const handleLogin = () => {
    try {
      dispatch(authenticateUser(obj));
      // Handle successful login (e.g., redirect)
    } catch (error) {
      // Handle login failure (show error message)
      console.error("Login failed:", error.message);
    }
  };

  console.log(error);

  return (
    <div>
      <button onClick={handleLogin}>{loading ? "loading" : "login"}</button>
      Login
    </div>
  );
};

export default Login;
