interface User {
  id: string;
  name: string;
  age: number;
}

const user: User = {
  id: "SHR01",
  name: "Shreyash",
  age: 21,
};

function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  //   obj[key] = value;
  //   return obj;

  return {
    ...obj,
    [key]: value,
  };
}

const updatedName = updateProperty(user, "name", "Rahul");

const updatedAge = updateProperty(user, "age", 30);
//Argument of type 'string' is not assignable to parameter of type 'number'.
//updateProperty(user, "age", "thirty");
export {};
