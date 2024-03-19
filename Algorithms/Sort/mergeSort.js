"use strict";

// n log n
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left

  const length = array.length;
  // the left side shoud span from 0 to half
  const mid = Math.floor(array.length / 2);

  // array from the left
  const left = array.slice(0, mid);
  // array from the right
  const right = array.slice(mid, array.length);

  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // loop through left
  const sortedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  // lop till one of the arrays are compleatly cycled through
  while (leftIndex < left.length && rightIndex < right.length) {
    // now compare the left element against the right
    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  //after any index is cycled then
  // put in all the remaining unindexed array elements
  return sortedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));

  // return a new sorted array
}

const answer = mergeSort(numbers);
console.log(answer);
