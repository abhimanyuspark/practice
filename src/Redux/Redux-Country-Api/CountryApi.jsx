import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CountryApiUrl } from "../apikey";

export const getContryApi = createAsyncThunk("fetch/country", async () => {
  const response = await axios.get(CountryApiUrl);
  return response.data.sort((a, b) =>
    a?.name?.common.localeCompare(b?.name?.common)
  );
});
