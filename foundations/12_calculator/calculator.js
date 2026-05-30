const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (sum) {
  return sum.reduce((total, curr) => total + curr, 0);
};

const multiply = function (sum) {
  return sum.reduce((sum, curr) => sum * curr, 1);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};

// FACTORIAL WHILE LOOP

// function factorialize(num) {
//   // Step 1. Create a variable result to store num
//   var result = num;

//   // If num = 0 OR num = 1, the factorial will return 1
//   if (num === 0 || num === 1) return 1;

//   // Step 2. Create the WHILE loop
//   while (num > 1) {
//     num--; // decrementation by 1 at each iteration
//     result = result * num; // or result *= num;
//     /*
//                     num           num--      var result      result *= num
//     1st iteration:   5             4            5             20 = 5 * 4
//     2nd iteration:   4             3           20             60 = 20 * 3
//     3rd iteration:   3             2           60            120 = 60 * 2
//     4th iteration:   2             1          120            120 = 120 * 1
//     5th iteration:   1             0          120
//     End of the WHILE loop
//     */
//   }

//   // Step 3. Return the factorial of the provided integer
//   return result; // 120
// }
// factorialize(5);

// FACTORIAL RECURSIVE
// function factorial (num) {
//   if(num === 0 || num === 1) {
//     return 1;
//   }else {
//     return (num * factorial(num -1));
//   };
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
