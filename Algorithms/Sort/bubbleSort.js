"use strict";

const arr = [3, 5, 1, 8, 6, 19, 2, 13, 13];

let sorterPos = arr.length;

//bubble sort
for (let i = 0; i < arr.length; i++) {
  // keep loping while aar not sorted
  let curent = 0;
  while (sorterPos) {
    // bubble
    if (arr[curent] > arr[curent + 1]) {
      let temp = arr[curent];
      arr[curent] = arr[curent + 1];
      arr[curent + 1] = temp;
    }
    if (curent == sorterPos) break;
    curent++;
  }
  //decrement after each bubble up
  sorterPos--;
}

console.log(arr);
