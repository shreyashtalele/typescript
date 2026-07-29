function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

function printValue<T>(value: T): void {
  console.log(value);
}

function getFirstElement<T>(Product: T[]): T {
  return Product[0];
}

function getArrayLength<T>(arr: T[]): number | undefined {
  return arr.length;
}
