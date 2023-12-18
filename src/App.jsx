import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loader from "./style/loader/Loader";
import { lightTheme, darkTheme } from "./style/Theme/Theme";
import { useThemeProvider } from "./hooks/useThemeProvider";

const PersistenceAuth = lazy(() =>
  import("./components/Persistence/PersistenceAuth")
);
const RequireAuth = lazy(() => import("./components/RequireAuth/RequireAuth"));

import {
  Home,
  Form,
  AllButtons,
  Accordians,
  CustomSelect,
  Login,
  Forget,
  Unauthorized,
  PageNotFound,
  AllInput,
  UseList,
  UserDetails,
  UsersAdd,
  UsersEdit,
  Upload,
} from "./pages/Export/Export";

function App() {
  const [theme] = useThemeProvider();
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
          <Route path="/forget" element={<Forget />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<PersistenceAuth />}>
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
              <Route path="/upload" element={<Upload />} />
            </Route>
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
        theme={theme ? "colored" : "dark"}
      />
    </ThemeProvider>
  );
}

export default App;
