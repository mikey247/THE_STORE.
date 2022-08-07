import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    userId: localStorage.getItem("userId"),
    userEmail: localStorage.getItem("email"),
    userFullName: localStorage.getItem("fullName"),
    // isAdmin: false,
  },

  reducers: {
    register: () => {},
    login: (state, action) => {
      //
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);

        state.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", true);
      }
      //
      state.userId = action.payload.user._id;
      localStorage.setItem("userId", action.payload.user._id);

      state.userEmail = action.payload.user.email;
      localStorage.setItem("email", action.payload.user.email);

      state.userFullName = action.payload.user.fullName;
      localStorage.setItem("fullName", action.payload.user.fullName);

      //   state.isAdmin = action.payload.user.isAdmin;
    },
    logout: () => {},
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
