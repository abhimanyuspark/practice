import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../apikey";

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

export const deleteUser = createAsyncThunk("delete/deleteUser", async (id) => {
  try {
    await axios.delete(`${apiUrl}/user/${id}`);
    return id;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteMultipleUsers = createAsyncThunk(
  "multiple/deleteMultipleUsers",
  async (ids) => {
    try {
      const deletePromises = ids.map(async (id) => {
        const response = await axios.delete(`${apiUrl}/user/${id}`);
        return { id, success: true, data: response.data };
      });

      const results = await Promise.all(deletePromises);

      console.log("Items deleted successfully:", results);
    } catch (error) {
      console.error("Error deleting items:", error.message);
    }
  }
);

export const updateUserStatus = createAsyncThunk(
  "Status/updateUserStatus",
  async ({ id, status }) => {
    const response = await axios.patch(`${apiUrl}/user/${id}`, { status });
    return response.data;
  }
);
