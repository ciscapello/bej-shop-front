import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormFields } from "../../components/loginForm/loginForm";
import { AppDispatch } from "../store";
import { LoginResponse } from "./types";
import { signIn } from "./userSlice";
import Api from "../../utils/api";
import axios, { AxiosError } from "axios";

export const logIn = createAsyncThunk<
  LoginResponse,
  FormFields,
  { rejectValue: string; dispatch: AppDispatch }
>("user/logIn", async (data, { rejectWithValue, dispatch }) => {
  let res;
  try {
    res = await Api.post(`/login`, data);
    console.log("res", res);
    dispatch(signIn(res.data));
  } catch (err) {
    console.log("error", err);
    if (axios.isAxiosError(err)) {
      return rejectWithValue(err.response?.data.message);
    } else {
      return new Error("Something goes wrong");
    }
  }
  return res.data;
});

// export const updateUserInfo = createAsyncThunk<
//   void,
//   { username: string; email: string },
//   { dispatch: AppDispatch }
// >("user/updateUserInfo", (data, { dispatch }) => {
//   Api.patch(`users`, data)
//     .then((res) => {
//       const { email, username } = res.data;
//       dispatch(setUserInfoSuccess(true));
//       setTimeout(() => dispatch(setUserInfoSuccess(false)), 2000);
//       dispatch(updateUserData({ email, username }));
//     })
//     .catch((error) => {
//       console.log(error.response.data.message);
//       dispatch(setUserInfoError(error.response.data.message));
//       setTimeout(() => dispatch(setUserInfoError(false)), 2000);
//     });
// });

// export const setPassword = createAsyncThunk<
//   void,
//   SetPasswordFieldValues,
//   { state: RootState; dispatch: AppDispatch }
// >("user/setPassword", (data, { dispatch }) => {
//   Api.patch(`users/update-password`, data)
//     .then(() => {
//       dispatch(setPasswordSuccess(true));
//       dispatch(setPasswordError(""));
//     })
//     .catch((error) => {
//       dispatch(setPasswordError(error.response.data.message));
//       console.log(error.response.data.message);
//     })
//     .finally(() => {
//       setTimeout(() => {
//         dispatch(setPasswordSuccess(false));
//       }, 2000);
//       setTimeout(() => {
//         dispatch(setPasswordError(false));
//       }, 2000);
//     });
// });

// export const signUp = createAsyncThunk<
//   unknown,
//   SignUpFormValues,
//   { dispatch: AppDispatch; rejectValue: string }
// >("user/signUp", async (data) => {
//   const res = await Api.post(`users/sign-up`, data);
//   console.log(res);
//   return res;
// });
