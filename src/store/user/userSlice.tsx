import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { signUp } from "./actions";

interface UserState {
  isLogin: boolean;
  username: string;
  email: string;
  token: string;
}

const initialState: UserState = {
  isLogin: false,
  username: "",
  email: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // signIn: (state, action: PayloadAction<LoginResponse>) => {
    //   const { user, token } = action.payload;
    //   console.log(action.payload);
    //   state.isLogin = true;
    //   state.email = user.email;
    //   state.username = user.username;
    //   state.token = token;
    // },
    logout: (state) => {
      state.isLogin = false;
      state.username = "";
      state.token = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(signUp.rejected, (state, action) => {
    //   console.log(action.error);
    //   if (action.error) {
    //     state.singUpError = action.error.message;
    //   }
    // });
  },
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;
