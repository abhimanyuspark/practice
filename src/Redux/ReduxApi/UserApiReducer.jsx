import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  getRoleBasedUser,
  getUserApi,
  updateUserStatus,
} from "./UserApi";

const initialState = {
  users: [],
  loading: false,
  error: "",
  // auth: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    filterUserdata: (state, action) => {
      const { filterStatus, filterFollow, filterConfig } = action.payload;
      state.users = state.users.filter((user) => {
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
      // .addCase(getUserApi.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getUserApi.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.users = action.payload;
      // })
      // .addCase(getUserApi.rejected, (state, action) => {
      //   state.loading = false;
      //   state.users = [];
      //   state.error = action.error.message;
      // })
      .addCase(getRoleBasedUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRoleBasedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getRoleBasedUser.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      })
      .addCase(updateUserStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        state.loading = false;
        const { id, status } = action.payload;
        state.users = state.users.map((item) =>
          item.id === id ? { ...item, status: status } : item
        );
      })
      .addCase(updateUserStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        state.users = state.users.filter((i) => {
          return i.id !== id;
        });
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
