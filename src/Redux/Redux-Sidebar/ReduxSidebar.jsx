import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: false,
};

const ReduxSidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sideBar = action?.payload;
    },
  },
});

export const { toggleSidebar } = ReduxSidebarSlice.actions;
export default ReduxSidebarSlice.reducer;
