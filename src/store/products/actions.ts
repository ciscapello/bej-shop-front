import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/api";
import axios, { AxiosResponse } from "axios";
import { GetProductsResponse } from "./types";
import { AppDispatch } from "../store";
import { addProducts } from "./productsSlice";

export const getProducts = createAsyncThunk<
  GetProductsResponse[] | Error,
  undefined,
  { rejectValue: string; dispatch: AppDispatch }
>("products/getProducts", async (_, { rejectWithValue, dispatch }) => {
  let res: AxiosResponse<GetProductsResponse[]>;
  try {
    res = await Api.get(`products`);
    dispatch(addProducts(res.data));
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue(err.response?.data.message);
    } else {
      return new Error("Something goes wrong");
    }
  }
  return res.data;
});

// export const buyProduct = createAsyncThunk<
//   void,
//   undefined,
//   { state: RootState }
// >("user/buyProduct", async (_, { getState }) => {
//   const { selectedProductForBuy } = getState().products;
//   const res = await Api.post(`payments/buy`, {
//     priceId: selectedProductForBuy,
//   });
//   console.log(res);
// });

// export const activateHoldedCodes = createAsyncThunk<
//   void,
//   { selectedCodes: number[]; subscribeId: number },
//   { dispatch: AppDispatch }
// >("products/activateHoldedCodes", async (args, { dispatch }) => {
//   console.log(args);
//   const res = await Api.put(`code/manage`, {
//     codesIds: args.selectedCodes,
//     subscribeId: args.subscribeId,
//   });
//   console.log(res);
//   dispatch(getSubscribes());
// });

// export const activateCode = createAsyncThunk<
//   Code,
//   Code,
//   { rejectValue: string }
// >("products/activateCode", async (code, { rejectWithValue }) => {
//   try {
//     const res = await Api.post(`code/activate`, {
//       code: code.code,
//     });
//     if (!res.data) {
//       throw new Error("Server error");
//     }
//     return res.data;
//   } catch (error) {
//     let message;
//     if (error instanceof Error) message = error.message;
//     else message = String(error);
//     return rejectWithValue(message);
//   }
// });

// export const changeProduct = createAsyncThunk<
//   ChangeProductRes,
//   undefined,
//   { rejectValue: string; state: RootState }
// >("products/changeProduct", async (_, { rejectWithValue, getState }) => {
//   const { selectedSubcribeId, selectedProductForBuy } = getState().products;
//   try {
//     const res = await Api.post(`subscribe/change-product`, {
//       productId: selectedProductForBuy,
//       subscribeId: selectedSubcribeId,
//     });
//     return res.data;
//   } catch {
//     return rejectWithValue("Server error");
//   }
// });
