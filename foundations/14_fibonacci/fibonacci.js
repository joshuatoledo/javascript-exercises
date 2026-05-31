const fibonacci = function (n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
// Do not edit below this line
module.exports = fibonacci;

//   const sequence = [0, 1];
//   for (let i = 2; i < n; i++) {
//     sequence[i] = sequence[i - 1] + sequence[i - 2];
//   }
//   return sequence.slice(0, n);
