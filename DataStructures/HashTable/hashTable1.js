"use strict"

// insert O(1)
// lookup O(1)
// delete O(1)
// seaarch O(1)

// unorderd insertion 
let user = {
    age : 54,
    name : 'Kylie',
    magic : true,
    scream : function() {
        console.log('ahhhhhhh!');
    }
}
 

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)





// in a hash map the order is maintained
const a = new Map();

//sets only holds the keys unique ones
const b = new Set();

