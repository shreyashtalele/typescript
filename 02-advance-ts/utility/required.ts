interface Employee {
  id: string;
  name?: string;
  department?: string;
  salary?: number;
}

type FullEmployee = Required<Employee>;

const validEmployee: FullEmployee = {
  id: "EMP-01",
  name: "shreyash",
  department: "HR",
  salary: 10000,
};

// const invalidEmployee: FullEmployee = {
//   id: "EMP-02",
//   name: "shreyash",
// };

export {};
