interface hasID {
  id: string;
}

function getItemId<T extends hasID>(item: T): string {
  return item.id;
}

// const User = {
//   id: "STR-0",
//   name: "shreyash",
// };

// const Product = {
//   id: "STR-02",
//   name: "Mobile",
// };

// const Employee = {
//   id: "STR-03",
//   department: "HR",
// };

// getItemId(User);
// getItemId(Employee);
// getItemId(Product);

interface User extends hasID {
  name: string;
  age: number;
}

interface Employee extends hasID {
  name: string;
  department: string;
}

interface Product extends hasID {
  name: string;
  price: number;
}

const user: User = {
  id: "user-01",
  name: "shreyash",
  age: 21,
};

const employee: Employee = {
  id: "emp-01",
  name: "rahul",
  department: "hr",
};

const product: Product = {
  id: "pdr-01",
  name: "laptop",
  price: 120000,
};

getItemId(user);
getItemId(employee);
getItemId(product);
export {};
