import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loader from "./style/loader/Loader";

import { lightTheme, darkTheme } from "./style/Theme/Theme";
const RequireAuth = lazy(() => import("./components/RequireAuth/RequireAuth"));

const Home = lazy(() => import("./pages/home/home"));
const AllButtons = lazy(() => import("./pages/AllButtons/AllButtons"));
const Accordians = lazy(() => import("./components/accordians/accordians"));
const CustomSelect = lazy(() => import("./pages/CustomSelect/CustomSelect"));
const Login = lazy(() => import("./pages/Login/Login"));
const Form = lazy(() => import("./components/DropDown/Form"));
const Unauthorized = lazy(() => import("./pages/Unauthorized/Unauthorized"));
const PageNotFound = lazy(() => import("./pages/404/PageNotFound"));
const AllInput = lazy(() => import("./pages/Input/AllInput"));
const UseList = lazy(() => import("./pages/UserList/UseList"));
const UserDetails = lazy(() =>
  import("./pages/UserList/CRUD_For_User/UserDetails")
);
const UsersAdd = lazy(() => import("./pages/UserList/CRUD_For_User/UsersAdd"));
const UsersEdit = lazy(() =>
  import("./pages/UserList/CRUD_For_User/UsersEdit")
);

function App() {
  const { theme } = useSelector((state) => state.layout);
  const role = {
    Admin: "admin",
    Employee: "employee",
    Client: "client",
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Suspense fallback={<Loader height="0px" />}>
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
          <Route
            element={<RequireAuth roleAccess={[role.Admin, role.Client]} />}
          >
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
            <Route path="/users" element={<UseList />} />
            <Route path="/user/details/:id" element={<UserDetails />} />
            <Route path="/user/add" element={<UsersAdd />} />
            <Route path="/user/update/:id" element={<UsersEdit />} />
            <Route path="/select" element={<CustomSelect />} />
            <Route path="/DropDown" element={<Form />} />
          </Route>

          {/*//?those Routes only for client */}
          <Route element={<RequireAuth roleAccess={[role.Client]} />}>
            <Route path="/allinput" element={<AllInput />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

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
