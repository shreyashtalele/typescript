interface User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
}

type ProductCategory = "Electronics" | "Clothing" | "Furniture" | "Books";

interface Product {
  readonly id: string;
  name: string;
  price: number;
  category: ProductCategory;
  stock: number;
}

type OrderStatus = "pending" | "confirmed" | "cancelled";

interface Order {
  readonly id: string;
  readonly userId: string;
  products: Product[];
  totalAmount: number;
  status: OrderStatus;
}

export {};
