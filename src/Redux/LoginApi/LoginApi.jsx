// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Define an initial state for authentication
const initialState = {
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
      return rejectWithValue(`Please Enter valid username`);
    }
  }
);

// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.loading = false;
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        const data = action?.payload;
        // Keys to be excluded
        let keysToExclude = ["id", "password"];

        // Create a new object without specified keys
        let newData = Object.fromEntries(
          Object.entries(data).filter(([key]) => !keysToExclude.includes(key))
        );
        Cookies.set("user", JSON.stringify(newData), { expires: 1 }); // Expires in 1 day
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
// Export the reducer
export default authSlice.reducer;
