import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = "http://localhost:3500";

export const getUserApi = createAsyncThunk("user/fetchUser", async () => {
  const response = axios.get(`${apiUrl}/user`);
  return (await response).data;
});
