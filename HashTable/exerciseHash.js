"use strict"

// remeber hash tables are great for look up but bad for memeory
// and searching for all the keys and all the values
//canot be sorted





// or just use a loop in loop // O(n)
// O(n*a*b)search and O(n) space
const checkForRepeats = function(array){

    // dinamic array O(n)
    const nonRepeatArray = [];
    let found = false;

    //O(a * b)
    for(let i = 0; i < array.length; i++){
        //first iteration
        if(!i){
            //first element in nonRepeatArray
            nonRepeatArray.push(array[0]);
            continue;
        }
        else{
            //cycke though the non repeting loop
            for(let j = 0; j < nonRepeatArray.length; j++){
                //check current array value to the whole nonRepeatArray array
                if(nonRepeatArray[j] == array[i]){
                    //set flag to true for a match
                    found = true;
                    // return the match
                    return array[i];
                }
            }
            //if not a match then push and not found;
            if(!found){
                nonRepeatArray.push(array[i]);
                console.log(nonRepeatArray);
                //continue while match not found
                continue;
            }
            //when found dont look for anything else end it
            return undefined;
        }
    }

}


// beter for a O(n) loop
console.log(checkForRepeats([1,6, 5, 1, 2, 3, 5, 1, 2, 4]));

//better for an O(n*a*b)
console.log(checkForRepeats([1,5, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(checkForRepeats([2, 3, 4, 5]));











console.log('-'.repeat(30));

// we can use a map and spped this up

//O(1) search
//O(n) space
const checkForRepeatsUsingMap = function(array){

    // create an empty object or map
    const index = {}; 
    // loop through the array
    for(let i = 0; i < array.length; i++){

        //check if the value is 
        if(index[array[i]]){
            //match found
            return array[i];
        }else{
            //add that iterent as a value to a key which has it value as its index
            // Key              value
            index[array[i]] = [array[i]];
            console.log(index);
        }
    }
}

console.log(checkForRepeatsUsingMap([1,6, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(checkForRepeatsUsingMap([2, 3, 4, 5]));
