import { IProducts } from "../../types";

export type GetProductsResponse = {
  status: string;
  result: number;
  body: IProducts[];
};
