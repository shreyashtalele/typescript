type User = {
  id: string;
  name: string;
  email: string;
};

type Employee = {
  employeeId: string;
  department: string;
  salary: number;
};

type EmployeeUser = User & Employee;

const employeeUser: EmployeeUser = {
  id: "USR-001",
  name: "Shreyash",
  email: "taleleshreyash44@gmail.com",
  employeeId: "EMP-001",
  department: "IT",
  salary: 10000,
};

type ProductCategory =
  | "Electronics"
  | "Furniture"
  | "Books"
  | "Clothing"
  | "Dairy";

type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
};

type Inventory = {
  stock: number;
  warehouse: string;
  lastUpdated: Date;
};

type ProductInventory = Product & Inventory;

const milkProduct: ProductInventory = {
  id: "PRD-001",
  name: "Amul Milk",
  price: 27,
  category: "Dairy",
  stock: 100,
  warehouse: "WH-B-001",
  lastUpdated: new Date(),
};

type Customer = {
  customerId: string;
  name: string;
  email: string;
};

type Order = {
  orderId: string;
  items: string[];
  totalAmount: number;
};

type CustomerOrder = Customer & Order;

const customerOrder: CustomerOrder = {
  customerId: "CUS-001",
  name: "Shreyash",
  email: "taleleshreyash44@gmail.com",
  orderId: "ORD-001",
  items: ["Roti", "Paneer Tikka"],
  totalAmount: 400,
};

export {};
