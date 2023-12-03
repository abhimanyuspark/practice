import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getAuthUser = createAsyncThunk(
  "authUser/getAuthUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3500/user?name=${username}`
      );
      //   console.log(username);
      const user = response.data[0];
      return user;
    } catch (error) {
      return rejectWithValue(`Please Enter valid username`);
    }
  }
);

export const updateThemeFromUser = createAsyncThunk(
  "theme/updatetheme",
  async ({ user, theme }) => {
    try {
      await axios.put(`http://localhost:3500/user?name=${user}`, {
        theme: theme,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
);
