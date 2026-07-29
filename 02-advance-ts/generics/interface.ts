interface Result<T> {
  success: boolean;
  message: string;
  data: T;
}

interface Employee {
  id: string;
  name: string;
  department: string;
}

const employeeResult: Result<Employee> = {
  success: true,
  message: "Employee fetched successfully",
  data: {
    id: "EMP-01",
    name: "Rahul",
    department: "HR",
  },
};

const employeesResult: Result<Employee[]> = {
  success: true,
  message: "Employees fetched successfully",
  data: [
    {
      id: "EMP-02",
      name: "Rahul",
      department: "HR",
    },
    {
      id: "EMP-03",
      name: "Shivam",
      department: "IT",
    },
  ],
};
