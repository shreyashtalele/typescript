interface Employee {
  id: string;
  name: string;
  department: string;
  salary: string;
  email: string;
}

type EmployeePublic = Omit<Employee, "salary">;

type EmployeeProfile = Omit<Employee, "salary" | "email">;

const employeeProfile: EmployeeProfile = {
  id: "SHR-01",
  name: "shreyash",
  department: "HR",
};

export {};
