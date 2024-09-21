import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: Cookies.get("session") ? true : false,
    user: localStorage.getItem(JSON.stringify("c_user")),
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      Cookies.remove("session", { path: "/" });
      localStorage.removeItem("c_user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
