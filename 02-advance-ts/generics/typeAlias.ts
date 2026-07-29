type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type User = {
  id: string;
  name: string;
  email: string;
};
const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: "str1",
    name: "shreyash",
    email: "taleleshreyash44@gmail.com",
  },
};

type Product = {
  id: string;
  name: string;
  price: number;
};

const productResponse: ApiResponse<Product> = {
  success: false,
  data: {
    id: "prod-1",
    name: "shampoo",
    price: 7.99,
  },
};

export {};
