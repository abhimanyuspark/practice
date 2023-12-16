import { configureStore } from "@reduxjs/toolkit";
import ReduxLayoutSlice from "../Redux/Redux-Layout/ReduxLayout";
import userSlice from "../Redux/ReduxApi/UserApiReducer";
import authSlice from "../Redux/LoginApi/reducer";
import countrySlice from "../Redux/Redux-Country-Api/CountryReducer";

const GlobalStore = configureStore({
  reducer: {
    layout: ReduxLayoutSlice,
    users: userSlice,
    auth: authSlice,
    country: countrySlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default GlobalStore;
