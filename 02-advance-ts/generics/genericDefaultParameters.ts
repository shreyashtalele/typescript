type ApiResponse<T = string> = {
  success: boolean;
  data: T;
};

const messageResponse: ApiResponse = {
  success: true,
  data: "data fectched successfully",
};

interface Product {
  id: string;
  product: string;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  success: true,
  data: {
    id: "PDR-01",
    product: "shampoo",
    price: 100,
  },
};

export {};
