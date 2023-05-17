import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  type: "",
  token: "",
  user: {},
  tempToken: "",
};

export const updateUserToken = createAsyncThunk(
  "user/update",
  async (token) => {
    return token;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
        console.log(action);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.type = action.payload.type;
      localStorage.clear();
    },
    saveOTPToken: (state, action) => {
      // console.log(action)
      // stat
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.type = action.payload.type;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = "";
      state.user = {};
      state.type = "";
    },
  },
});

export const { login, saveOTPToken, updateToken, updateUser, logout } =
  authSlice.actions;


  export default authSlice.reducer;