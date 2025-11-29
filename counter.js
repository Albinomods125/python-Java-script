export function createCounter() {
  let value = 0;

  return function () {
    value++;
    return value;
  };
}
