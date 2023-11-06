import { configureStore } from "@reduxjs/toolkit";
import ReduxSidebarSlice from "../Redux-Sidebar/ReduxSidebar";

const GlobalStore = configureStore({
  reducer: {
    sidebar: ReduxSidebarSlice,
  },
});

export default GlobalStore;
