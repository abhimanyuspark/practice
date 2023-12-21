import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../apikey";

export const getUserData = createAsyncThunk("user/fetchUser", async (id) => {
  const response = await axios.get(`${apiUrl}/user/${id}`);
  return response.data;
});

export const getRoleBasedUsers = createAsyncThunk(
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

export const addUser = createAsyncThunk("adduser/postUser", async (data) => {
  const response = await axios.post(`${apiUrl}/user`, data);
  return response.data;
});

export const editUser = createAsyncThunk("editUser/patchUser", async (data) => {
  const response = await axios.patch(`${apiUrl}/user/${data.id}`, data);
  return response.data;
});

export const updateUserStatus = createAsyncThunk(
  "Status/updateUserStatus",
  async ({ id, status }) => {
    const response = await axios.patch(`${apiUrl}/user/${id}`, { status });
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
      const deletePromises = ids.map(async (d) => {
        const id = d;
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
