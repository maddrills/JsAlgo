const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  //Code Here

  //   loops through the entire array
  for (let i = 0; i < array.length - 1; i++) {
    //asign first element as small
    smallElement = array[i];
    //small element position
    smallElementPos = 0;
    //inner loop that loops one step ahed
    for (let j = i + 1; j < array.length; j++) {
      //find smalest element
      if (smallElement > array[j]) {
        smallElement = array[j];
        smallElementPos = j;
      }
    }
    console.log(smallElement, " ", smallElementPos);

    //asign the first element to temp
    let temp = array[i];
    //asign small to first element
    array[i] = smallElement;
    //then put the first element in the smallest array index
    array[smallElementPos] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
