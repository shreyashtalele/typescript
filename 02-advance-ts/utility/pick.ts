interface Employee {
  id: string;
  name: string;
  department: string;
  address: string;
}

type EmployeeCard = Pick<Employee, "name" | "department">;

type EmployeeAddress = Pick<Employee, "name" | "address">;

const employeeAddress: EmployeeAddress = {
  name: "shreyash",
  address: "pune",
};
