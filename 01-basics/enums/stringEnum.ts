enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Seller = "SELLER",
}

enum PaymentStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Failed = "FAILED",
  Refunded = "REFUNDED",
}

enum Theme {
  Dark = "DARK",
  Light = "LIGHT",
  System = "SYSTEM",
}

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

type Payment = {
  id: string;
  amount: number;
  status: PaymentStatus;
};

type Preferences = {
  theme: Theme;
};

const user: User = {
  id: "USR-001",
  name: "Shreyash Talele",
  email: "taleleshreyash44@gmail.com",
  role: UserRole.Seller,
};

const payment: Payment = {
  id: "PAY-001",
  amount: 1500,
  status: PaymentStatus.Paid,
};

const preferences: Preferences = {
  theme: Theme.Dark,
};

export {};
