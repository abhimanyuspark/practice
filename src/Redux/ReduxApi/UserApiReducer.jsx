import { createSlice } from "@reduxjs/toolkit";
import { getUserApi } from "./ReduxApi";

const initialState = {
  user: [],
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    filterLeaddata: (state, action) => {
      const { filterStatus, filterFollow, filterConfig } = action.payload;
      state.user = state.user.filter((user) => {
        let isStatusMatched = true;
        let isFollowMatched = true;
        let isLeadValueMatched = true;

        if (filterStatus !== "All" && user.status !== filterStatus) {
          isStatusMatched = false;
        }

        if (filterFollow !== "All" && user.followUp !== filterFollow) {
          isFollowMatched = false;
        }

        const userValue = user.progress;

        if (
          filterConfig.maxLeadValue &&
          userValue > filterConfig.maxLeadValue
        ) {
          isLeadValueMatched = false;
        }

        if (
          filterConfig.minLeadValue &&
          userValue < filterConfig.minLeadValue
        ) {
          isLeadValueMatched = false;
        }

        return isStatusMatched && isFollowMatched && isLeadValueMatched;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserApi.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserApi.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
