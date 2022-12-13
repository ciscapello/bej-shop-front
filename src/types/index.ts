export interface IProducts {
  _id: string;
  name: string;
  description?: string;
  price: string;
  in_stock: boolean;
  images?: string[];
}
