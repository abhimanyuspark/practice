import { createSlice } from "@reduxjs/toolkit";
import { getRoleBasedUsers, getUserData } from "./UserApi";

const initialState = {
  roleBasedUsers: [],
  loading: false,
  error: "",
  user: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    deleteUserReducer: (state, action) => {
      const id = action?.payload;
      state.roleBasedUsers = state.roleBasedUsers.filter((i) => {
        return i.id !== id;
      });
    },
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
      // Get Users data depand on role change

      .addCase(getRoleBasedUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRoleBasedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.roleBasedUsers = action.payload;
      })
      .addCase(getRoleBasedUsers.rejected, (state, action) => {
        state.loading = false;
        state.roleBasedUsers = [];
        state.error = action.error.message;
      })

      //User data

      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
