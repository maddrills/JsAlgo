"use strict";
// O(n)
function findFactorialRecursivell(number) {
  //base case
  if (number === 1) return 1;
  //first evaluate the expression then drop the value
  return number-- * findFactorialRecursivell(number);
}

console.log(findFactorialRecursivell(5));
