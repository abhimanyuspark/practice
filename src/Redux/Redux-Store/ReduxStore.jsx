import { configureStore } from "@reduxjs/toolkit";
import ReduxLayoutSlice from "../Redux-Layout/ReduxLayout";
import userSlice from "../ReduxApi/UserApiReducer";
import authSlice from "../LoginApi/reducer";
import countrySlice from "../Redux-Country-Api/CountryReducer";

const GlobalStore = configureStore({
  reducer: {
    layout: ReduxLayoutSlice,
    users: userSlice,
    auth: authSlice,
    country: countrySlice,
  },
});

export default GlobalStore;
