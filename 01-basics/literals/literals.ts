type EmployeeRole = "developer" | "designer" | "manager" | "hr";

type LeaveStatus = "pending" | "approved" | "rejected";

type PaymentMethod = "cash" | "card" | "upi" | "netbanking";

type Theme = "dark" | "light" | "system";

type Employee = {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
  leaveStatus: LeaveStatus;
};

type Order = {
  id: string;
  paymentMethod: PaymentMethod;
};

type UserPreferences = {
  theme: Theme;
};

const shreyash: Employee = {
  id: "EMP-001",
  name: "Shreyash Talele",
  email: "taleleshreyash44@gmail.com",
  role: "hr",
  leaveStatus: "rejected",
};

export {};
