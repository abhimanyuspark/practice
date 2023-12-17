import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../apikey";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/user?email=${email}`);
      const user = response.data[0];

      if (user.password === password) {
        return user;
      } else {
        return rejectWithValue("Please Enter valid credentials");
      }
    } catch (error) {
      return rejectWithValue("Please Enter valid email");
    }
  }
);

export const refreshAuthUser = createAsyncThunk(
  "auth/refreshAuthUser",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/user?email=${email}`);
      const user = response.data[0];
      return user;
    } catch (error) {
      return rejectWithValue("Please Enter valid email");
    }
  }
);
