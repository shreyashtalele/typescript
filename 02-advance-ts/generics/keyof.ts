type User = {
  id: string;
  name: string;
  email: string;
  age: string;
};

type UserKeys = keyof User;

let key1: UserKeys;
let key2: UserKeys;
let key3: UserKeys;
key1 = "id";
//key2 ='mobile' Type '"mobile"' is not assignable to type 'keyof User'.

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  expiry: Date;
};

type ProductKeys = keyof Product;

let productkey: ProductKeys = "id";
//let productkey2 : ProductKeys = 'mfgdate' Type '"mfgdate"' is not assignable to type 'keyof Product'.
