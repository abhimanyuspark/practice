import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { authenticateUser, refreshAuthUser } from "./LoginApi";

const initialState = {
  error: null,
  loading: false,
  theme: false,
  user: {},
  persist: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.loading = false;
      state.user = {};
      state.persist = false;
      Cookies.remove("user");
    },
    togglePersist: (state, action) => {
      state.persist = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        const persist = state.persist;
        if (persist) {
          const { name, role } = action.payload;
          Cookies.set("user", JSON.stringify({ name, role, persist }), {
            expires: 7,
          });
        }
      })
      .addCase(refreshAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/pending") || action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { logout, togglePersist } = authSlice.actions;
export default authSlice.reducer;
