class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

interface User {
  id: string;
  name: string;
}

const userStrorage = new Storage<User>();

userStrorage.add({
  id: "SHR-01",
  name: "SHREYASH",
});

userStrorage.add({
  id: "RAH-01",
  name: "Rahul",
});

console.log(userStrorage.getAll());

interface hasID {
  id: string;
}

class Repository<T extends hasID> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  findById(id: string): T | undefined {
    return this.items.find((item) => id === item.id);
  }

  delete(id: string): boolean {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      return false;
    }

    this.items.splice(index, 1);

    return true;
  }
}

interface Product extends hasID {
  name: string;
  price: number;
}

const ProductRepository = new Repository<Product>();
ProductRepository.add({
  id: "PDR-1",
  name: "oil",
  price: 300,
});

ProductRepository.add({
  id: "PDR-2",
  name: "milk",
  price: 30,
});

export {};
