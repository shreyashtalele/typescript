function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface User {
  id: string;
  name: string;
  age: number;
}

const user: User = {
  id: "SHR-01",
  name: "shreyasg",
  age: 21,
};

console.log(getProperty(user, "id"));

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));

//console.log(getProperty(user, "salary"));
//Argument of type '"salary"' is not assignable to parameter of type 'keyof User'.
export {};
