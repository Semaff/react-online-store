import jwtDecode from "jwt-decode";
import { AnyAction } from "@reduxjs/toolkit";

import { UserState } from ".";

type UserHandler = (state: UserState, action: AnyAction) => UserState;

export const handleAuth: UserHandler = (state, action) => {
  localStorage.setItem("token", action.payload);

  return {
    ...state,
    user: jwtDecode(action.payload),
    status: "IDLE",
  };
};

export const handleError: UserHandler = (state) => {
  localStorage.removeItem("token");

  return {
    ...state,
    user: null,
    status: "ERROR",
  };
};

export const handleLoading: UserHandler = (state: UserState): UserState => {
  return {
    ...state,
    status: "LOADING",
  };
};
