import { createSlice } from "@reduxjs/toolkit";
import { getUserApi } from "./UserApi";

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
    // getUserObj: (state, action) => {
    //   const { username, password } = action?.payload;
    //   state.auth = state.users.find(
    //     (u) => u.name === username && u.password === password
    //   );
    // },
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
      .addCase(getUserApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserApi.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUserApi.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
