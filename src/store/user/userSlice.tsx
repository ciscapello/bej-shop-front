import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn } from "./actions";
import { LoginResponse } from "./types";
// import { signUp } from "./actions";

interface UserState {
  isLogin: boolean;
  username: string;
  email: string;
  token: string;
  error: string;
  isLoading: boolean;
}

const initialState: UserState = {
  isLogin: false,
  username: "",
  email: "",
  token: "",
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<LoginResponse>) => {
      const {
        token,
        data: { email, name },
      } = action.payload;
      console.log(action.payload);
      state.isLogin = true;
      state.email = email;
      state.username = name;
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.rejected, (state, action) => {
        action.payload && (state.error = action.payload);
        console.log(action);
        state.isLoading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(logIn.fulfilled, (state) => {
        state.isLoading = false;
        state.error = "";
      });
  },
});

export default userSlice.reducer;

export const { signIn } = userSlice.actions;
