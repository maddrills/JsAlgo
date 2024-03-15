"use strict"

const strings = ['a','b','c','d'];

console.log(strings[2]);

strings.push('e'); // O(1) becasue it puts it in the end of the array

console.log(strings);

strings.pop();
strings.pop();  // O(1)


console.log(strings);


strings.unshift('X'); // O(n) because its added to the front and shifts everythingelse back

console.log(strings);

strings.shift(strings); // O(n) removes the first element and shifts everythingelse backs

console.log(strings);
strings.push('e');
strings.push('n');
strings.push('t');



strings.splice(2,1); // this will remove an element and reorder the array 2 count and stop 1 is the number of element it will remove after

console.log(strings);


strings.splice(2,0,"hesoyam"); //O(n/2) = O(n)
console.log(strings); // this will trevers the array till 2 then count 0 elements to remove and replace the counted position with hesoyam and reorder the array


