"use strict";
//  L 180
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(numbers);

function insertionSort(array) {
  //Code Here
  //loop through the entire array
  for (let i = 1; i < array.length; i++) {
    //sorted position walker
    let sortedPosition = 0;
    // cycle through the sorted positions till unsorted array
    while (sortedPosition <= i) {
      //check if the next value is smaller than the sorted array
      if (array[sortedPosition] > array[i]) {
        //then insert the array at that position and switch the values
        let temp = array[i];
        array[i] = array[sortedPosition];
        array[sortedPosition] = temp;
      }
      sortedPosition++;
    }
  }
}

console.log(insertionSort(numbers));

console.log(numbers);
