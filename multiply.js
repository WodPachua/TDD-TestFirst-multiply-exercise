export function multiply(a, b) {
  // return a * b;
  let product = 0;
  for (let i = 1; i <= b; i++) {
    product += a;
  }

  return product;
}
