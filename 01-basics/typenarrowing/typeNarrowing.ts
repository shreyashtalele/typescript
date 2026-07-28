function processInput(value: string | number | boolean): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log(value ? "active" : "inactive");
  }
}
