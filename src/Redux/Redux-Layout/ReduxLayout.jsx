import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

const ReduxLayoutSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleTheme } = ReduxLayoutSlice.actions;
export default ReduxLayoutSlice.reducer;
