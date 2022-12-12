import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../types";

interface InitialState {
  products: IProducts[] | [];
}

const initialState: InitialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(getSubscribes.pending, (state) => {
    //     state.loading = true;
    //     state.error = false;
    //   })
    //   .addCase(getSubscribes.fulfilled, (state, action) => {
    //     state.subscribes = action.payload;
    //     state.loading = false;
    //     state.error = false;
    //   })
    //   .addCase(activateCode.pending, (state) => {
    //     state.loading = true;
    //   })
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

export const {} = productsSlice.actions;
