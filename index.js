function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}

function makeInt(n) {
  // Parse `n` as an integer with base 10
  const parsed = parseInt(n, 10);
  return isNaN(parsed) ? NaN : parsed;
}

function preserveDecimal(n) {
  // Parse `n` as a floating-point number
  const parsed = parseFloat(n);
  return isNaN(parsed) ? NaN : parsed;
}
