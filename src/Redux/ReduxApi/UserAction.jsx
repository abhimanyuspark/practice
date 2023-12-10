import { userSlice } from "./UserApiReducer";

const { filterUserdata, deleteUserReducer, deleteMultipleUsersReducer } =
  userSlice.actions;

export { filterUserdata, deleteUserReducer, deleteMultipleUsersReducer };
