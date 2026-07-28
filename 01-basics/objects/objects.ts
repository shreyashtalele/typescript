type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return {
    ...user,
    isActive: true,
  };
}

const user = createUser({
  name: "Shreyash Talele",
  email: "taleleshreyash44@gmail.com",
  isActive: false,
});

type Employee = {
  readonly id: string;
  name: string;
  email: string;
  salary: number;
};

const employee: Employee = {
  id: "EMP-001",
  name: "Shreyash Talele",
  email: "taleleshreyash44@gmail.com",
  salary: 10000,
};

export {};
