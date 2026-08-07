interface Product {
  id: string;
  name: string;
  price: number;
}

type ReadOnlyProduct = Readonly<Product>;

const product: ReadOnlyProduct = {
  id: "SS-1",
  name: "shampoo",
  price: 123,
};

// product.price = 124

export {};
