import { authRequest, guestRequest } from "@http/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserDTO } from "@typings/user";
import parseError from "utils/parseError";

export const checkAuth = createAsyncThunk("users/checkAuth", async () => {
  try {
    const response = await authRequest.get("api/user/auth");
    const token = response.data.token;
    return token;
  } catch (err) {
    return Promise.reject(parseError(err));
  }
});

export const signin = createAsyncThunk("users/signin", async ({ username, password }: UserDTO) => {
  try {
    const response = await guestRequest.post("api/user/signin", { username, password });
    const token = response.data.token;
    return token;
  } catch (err) {
    return Promise.reject(parseError(err));
  }
});

export const signup = createAsyncThunk("users/signup", async ({ username, password }: UserDTO) => {
  try {
    const response = await guestRequest.post("api/user/signup", { username, password });
    const token = response.data.token;
    return token;
  } catch (err) {
    return Promise.reject(parseError(err));
  }
});
