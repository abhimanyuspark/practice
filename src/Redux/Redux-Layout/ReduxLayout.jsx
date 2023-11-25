import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: true,
  theme: false,
};

const ReduxLayoutSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sideBar = action?.payload;
    },
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleSidebar, toggleTheme } = ReduxLayoutSlice.actions;
export default ReduxLayoutSlice.reducer;
