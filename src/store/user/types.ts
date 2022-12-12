export type LoginResponse = {
  status: string;
  token: string;
  data: {
    name: string;
    email: string;
    id: string;
  };
};
