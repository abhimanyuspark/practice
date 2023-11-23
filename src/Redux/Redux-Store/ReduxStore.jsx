import { configureStore } from "@reduxjs/toolkit";
import ReduxSidebarSlice from "../Redux-Sidebar/ReduxSidebar";
import userSlice from "../ReduxApi/UserApiReducer";
import authSlice from "../LoginApi/LoginApi";

const GlobalStore = configureStore({
  reducer: {
    sidebar: ReduxSidebarSlice,
    users: userSlice,
    auth: authSlice,
  },
});

export default GlobalStore;
