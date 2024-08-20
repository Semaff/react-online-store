import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authRequest, guestRequest } from "../http/requests";
import jwtDecode from "jwt-decode";

const handleAuth = (state, action) => {
  localStorage.setItem("token", action.payload);

  return {
    ...state,
    entity: jwtDecode(action.payload),
    loggedIn: true,
    error: null,
    status: "idle",
  };
};

const handleError = (state, action) => {
  localStorage.removeItem("token", action.payload);

  return {
    ...state,
    entity: null,
    loggedIn: false,
    error: action.error,
    status: "error",
  };
};

const handlePending = (state, action) => {
  return {
    ...state,
    error: null,
    status: "pending",
  };
};

/*
  Reducer
*/
const initialState = {
  entity: {},
  loggedIn: false,
  error: null,
  status: "idle", // idle / loading / ?error
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout(state, action) {
      state.entity = null;
      state.loggedIn = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.fulfilled, handleAuth)
      .addCase(signin.fulfilled, handleAuth)
      .addCase(checkAuth.fulfilled, handleAuth)
      .addCase(signup.pending, handlePending)
      .addCase(signin.pending, handlePending)
      .addCase(checkAuth.pending, handlePending)
      .addCase(signup.rejected, handleError)
      .addCase(signin.rejected, handleError)
      .addCase(checkAuth.rejected, handleError);
  },
});

export default userSlice.reducer;

/*
  Selector creators
*/
export const selectUser = (state) => state.user.entity;
export const selectUserLoggedIn = (state) => state.user.loggedIn;
export const selectUserError = (state) => state.user.error;
export const selectUserStatus = (state) => state.user.status;

/*
  Action creators
*/
export const { userLogout } = userSlice.actions;

/*
  Thunk actions
*/
export const checkAuth = createAsyncThunk("users/checkAuth", async () => {
  try {
    const response = await authRequest.get("api/user/auth");
    const token = response.data.token;
    return token;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

export const signin = createAsyncThunk("users/signin", async ({ username, password }) => {
  try {
    const response = await guestRequest.post("api/user/signin", { username, password });
    const token = response.data.token;
    return token;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

export const signup = createAsyncThunk("users/signup", async ({ username, password }) => {
  try {
    const response = await guestRequest.post("api/user/signup", { username, password });
    const token = response.data.token;
    return token;
  } catch (err) {
    return Promise.reject(err.message);
  }
});
