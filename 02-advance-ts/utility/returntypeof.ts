function getProducts() {
  return {
    id: "abc-01",
    name: "shampoo",
    price: 123,
  };
}

type Product = ReturnType<typeof getProducts>;
