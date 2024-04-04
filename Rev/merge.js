"use strict";

const arraayToSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 5, 4, 0];

const mergeSort = function (array) {
  // base case
  if (array.length === 1) return array;

  const mid = Math.floor(array.length / 2);

  const leftHalf = array.slice(0, mid);

  //   mid to the rest
  const rightHalf = array.slice(mid);

  console.log(leftHalf, rightHalf);

  return mergerOfLeftAndRight(mergeSort(leftHalf), mergeSort(rightHalf));
};

// merge
function mergerOfLeftAndRight(left, right) {
  // returns a new aarray every time
  const sortedArray = [];
  let lll = 0;
  let rrr = 0;

  //   while swaps are available
  while (lll < left.length && rrr < right.length) {
    if (left[lll] < right[rrr]) {
      // swap
      sortedArray.push(left[lll]);
      lll++;
    } else {
      sortedArray.push(right[rrr]);
      rrr++;
    }
  }
  //   join up array

  while (lll < left.length || rrr < right.length) {
    if (lll < left.length) {
      sortedArray.push(left[lll]);
      lll++;
    } else {
      sortedArray.push(right[rrr]);
      rrr++;
    }
  }
  return sortedArray;

  //   join up the rest of the array
  //return sortedArray.concat(left.slice(lll)).concat(right.slice(rrr));
}

console.log(mergeSort(arraayToSort));
