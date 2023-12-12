import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../apikey";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/user?name=${username}`);
      const user = response.data[0];

      if (user.password === password) {
        return user;
      } else {
        return rejectWithValue("Please Enter valid credentials");
      }
    } catch (error) {
      return rejectWithValue("Please Enter valid username");
    }
  }
);

export const refreshAuthUser = createAsyncThunk(
  "auth/refreshAuthUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/user?name=${username}`);
      const user = response.data[0];
      return user;
    } catch (error) {
      return rejectWithValue("Please Enter valid username");
    }
  }
);
