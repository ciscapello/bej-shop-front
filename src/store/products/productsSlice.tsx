import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../types";
import { getProducts } from "./actions";

interface InitialState {
  products: IProducts[] | [];
  error: string;
  isLoading: boolean;
}

const initialState: InitialState = {
  products: [],
  error: "",
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload.body;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getProducts.fulfilled, (state) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getProducts.rejected, (state, action) => {
        action.payload && (state.error = action.payload);
        state.isLoading = false;
      });
    //   .addCase(activateCode.fulfilled, (state, action) => {
    //     state.loading = false;
    //     console.log("payload", action.payload);
    //     const subscribeIndex = state.subscribes.findIndex(
    //       (elem) => elem.id === action.payload.subscribeId
    //     );
    //     const codeIndex = state.subscribes[subscribeIndex].codes.findIndex(
    //       (elem) => elem.id === action.payload.id
    //     );
    //     state.subscribes[subscribeIndex].codes[codeIndex] = action.payload;
    //   })
    //   .addCase(activateCode.rejected, (state, action) => {
    //     state.error = true;
    //     console.log(action.payload);
    //   })
    //   .addCase(changeProduct.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(changeProduct.fulfilled, (state) => {
    //     state.loading = false;
    //   });
  },
});

export default productsSlice.reducer;

export const { addProducts } = productsSlice.actions;
