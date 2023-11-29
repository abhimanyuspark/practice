import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import Unauthorized from "./pages/Unauthorized/Unauthorized";

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
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/*//?Routes for admin, employee and client */}
        <Route
          element={
            <RequireAuth
              roleAccess={[role.Admin, role.Employee, role.Client]}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<h1>Setting</h1>} />
        </Route>

        {/*//?those Routes only for admin and client */}
        <Route element={<RequireAuth roleAccess={[role.Admin, role.Client]} />}>
          <Route path="/allbuttons" element={<AllButtons />} />
        </Route>

        {/*//?those Routes only for admin and employee */}
        <Route
          element={<RequireAuth roleAccess={[role.Admin, role.Employee]} />}
        >
          <Route path="/accordians" element={<Accordians />} />
        </Route>

        {/*//?those Routes only for admin */}
        <Route element={<RequireAuth roleAccess={[role.Admin]} />}>
          <Route path="/select" element={<CustomSelect />} />
          <Route path="/DropDown" element={<Form />} />
        </Route>

        <Route path="*" element={<h1>Page Not found</h1>} />
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
