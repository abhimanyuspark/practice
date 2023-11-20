import { configureStore } from "@reduxjs/toolkit";
import ReduxSidebarSlice from "../Redux-Sidebar/ReduxSidebar";
import userSlice from "../ReduxApi/UserApiReducer";

const GlobalStore = configureStore({
  reducer: {
    sidebar: ReduxSidebarSlice,
    user: userSlice,
  },
});

export default GlobalStore;
