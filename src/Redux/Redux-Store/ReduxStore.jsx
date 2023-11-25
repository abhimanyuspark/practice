import { configureStore } from "@reduxjs/toolkit";
import ReduxLayoutSlice from "../Redux-Layout/ReduxLayout";
import userSlice from "../ReduxApi/UserApiReducer";
import authSlice from "../LoginApi/LoginApi";

const GlobalStore = configureStore({
  reducer: {
    layout: ReduxLayoutSlice,
    users: userSlice,
    auth: authSlice,
  },
});

export default GlobalStore;
