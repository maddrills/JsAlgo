"use strict";
const boxes = [1, 2, 3, 4, 5];

// we have to make pairs 
// eg 11 12 13 14 15 22 23 24 25 33 34 35 44 45 55

//first we need an outer loop 

const lopperFuin = function (){

    boxes.forEach((ele, pos, fullArr) => {
        fullArr.forEach((ele2, pos2) => {
            console.log(`${ele}${ele2}\n`);
        })
    })
}


lopperFuin();