interface User {
  id: string;
  name: string;
}

interface Prefrances {
  theme: string;
  language: string;
}

const User = {
  id: "SHR-01",
  name: "shreyash",
};

const Prefrances = {
  theme: "dark",
  language: "marathi",
};

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

const profile = merge(User, Prefrances);

console.log(profile);
