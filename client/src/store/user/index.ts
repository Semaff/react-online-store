import { createSlice } from "@reduxjs/toolkit";
import { User } from "@typings/user";

import { checkAuth, signin, signup } from "./thunks";
import { handleAuth, handleError, handleLoading } from "./handlers";

import { RootState } from "..";
import { Status } from "@typings/status";

export interface UserState {
  user: User | null;
  status: Status;
}

/* Reducer */
const initialState: UserState = {
  user: null,
  status: "IDLE",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout(state) {
      state.user = null;
      state.status = "IDLE";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signin.fulfilled, handleAuth)
      .addCase(signin.pending, handleLoading)
      .addCase(signin.rejected, handleError)

      .addCase(signup.fulfilled, handleAuth)
      .addCase(signup.pending, handleLoading)
      .addCase(signup.rejected, handleError)

      .addCase(checkAuth.fulfilled, handleAuth)
      .addCase(checkAuth.pending, handleLoading)
      .addCase(checkAuth.rejected, handleError);
  },
});

export default userSlice.reducer;

/* Selectors */
export const selectUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;

/* Actions */
export const { userLogout } = userSlice.actions;
