import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const isBrowser = typeof window !== "undefined";
const accessToken = isBrowser ? localStorage.getItem("accessToken") : null;
const refreshToken = isBrowser ? localStorage.getItem("refreshToken") : null;
let initialState = {
  accessToken: null,
  refreshToken: null,
};
if (accessToken && refreshToken) {
  initialState.accessToken = accessToken;
  initialState.refreshToken = refreshToken;
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken, user } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = refreshToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", user);
    },
    logOut: (state, action) => {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user", data.user);
      Cookies.remove("sessionid");
    },
  },
});
export default authSlice.reducer;
export const { setCredentials, logOut } = authSlice.actions;


