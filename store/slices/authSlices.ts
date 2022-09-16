import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Authentication } from "../../types/AuthTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthentication(
      state: Authentication,
      action: PayloadAction<Authentication>
    ) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    logoutUser(state: Authentication) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    }
  },
});

export const { setAuthentication } = authSlice.actions;
export default authSlice.reducer;
