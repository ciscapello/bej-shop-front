import { RootState } from "../store";

export const selectAllProducts = (state: RootState) => {
  return state.products.products;
};
