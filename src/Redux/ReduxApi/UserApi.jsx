import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = "http://localhost:3500";

export const getUserApi = createAsyncThunk("user/fetchUser", async () => {
  const response = axios.get(`${apiUrl}/user`);
  return (await response).data;
});

export const getRoleBasedUser = createAsyncThunk(
  "roleBaseUser/fetchRoleBaseUser",
  async (role) => {
    let rolesToFetch;

    if (Array.isArray(role)) {
      rolesToFetch = role.join("&role=");
    } else {
      rolesToFetch = role;
    }

    const response = await axios.get(
      `${apiUrl}/user${`?role=${rolesToFetch}`}`
    );

    return response.data;
  }
);
