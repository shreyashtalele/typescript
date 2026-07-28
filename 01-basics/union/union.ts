type UserRole = "admin" | "editor" | "viewer";

type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export {};
