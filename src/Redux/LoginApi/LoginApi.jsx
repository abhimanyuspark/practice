// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state for authentication
const initialState = {
  user: null,
  error: null,
  loading: false,
};

// Define the authentication asynchronous thunk
export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3500/user?name=${username}`
      );
      //   console.log(username, password);
      const user = response.data[0];

      if (Object.keys(user).length === 0) {
        return rejectWithValue("Please Enter valid username");
      }

      if (user.password === password) {
        // console.log(user);
        return user;
      } else {
        return rejectWithValue("Please Enter valid credentials");
      }
    } catch (error) {
      return rejectWithValue(`Login Failed due to: ${error.message}`);
    }
  }
);

// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

// Export the reducer
export default authSlice.reducer;
