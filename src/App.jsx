import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import AllButtons from "./pages/AllButtons/AllButtons";
import Accordians from "./components/accordians/accordians";
import CustomSelect from "./pages/CustomSelect/CustomSelect";
import Login from "./pages/Login/Login";
import Form from "./components/DropDown/Form";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/Theme/Theme";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useSelector((state) => state.layout);
  const role = {
    Admin: "admin",
    Employee: "employee",
    Client: "client",
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

        <Route
          element={
            <RequireAuth
              roleAccess={[role.Admin, role.Employee, role.Client]}
            />
          }
        >
          <Route index element={<Home />} />
        </Route>

        <Route element={<RequireAuth roleAccess={[role.Admin]} />}>
          <Route path="/allbuttons" element={<AllButtons />} />
          <Route path="/accordians" element={<Accordians />} />
          <Route path="/select" element={<CustomSelect />} />
          <Route path="/DropDown" element={<Form />} />
          <Route path="/setting" element={<h1>Setting</h1>} />
        </Route>

        <Route element={<RequireAuth roleAccess={[role.Employee]} />}>
          <Route path="/accordians" element={<Accordians />} />
          <Route path="/setting" element={<h1>Setting</h1>} />
        </Route>

        <Route element={<RequireAuth roleAccess={[role.Client]} />}>
          <Route path="/allbuttons" element={<AllButtons />} />
          <Route path="/setting" element={<h1>Setting</h1>} />
        </Route>

        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme ? "light" : "dark"}
      />
    </ThemeProvider>
  );
}

export default App;
