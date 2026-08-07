interface Employee {
  id: string;
  name: string;
  age: number;
  department: string;
}

type UpdateEmployee = Partial<Employee>;

const nameOnlyEmployee: UpdateEmployee = {
  name: "shreyash",
};

const ageOnlyEmployee: UpdateEmployee = {
  age: 21,
};

const idOnlyEmployee: UpdateEmployee = {
  id: "EMP-01",
};

const emptyEmployee: UpdateEmployee = {};

export {};
