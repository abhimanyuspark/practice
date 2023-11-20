import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = "http://localhost:3500/user";

export const getUserApi = createAsyncThunk("user/fetchUser", async () => {
  const response = axios.get(apiUrl);
  return (await response).data;
});
