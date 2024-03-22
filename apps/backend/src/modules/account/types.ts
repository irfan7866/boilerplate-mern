export type Account = {
  id: string;
  email: string;
  name: string;
  password: string;
};

export type CreateAccountParams = {
  email: string;
  name: string;
  password: string;
};
