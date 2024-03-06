"use strict"

//advantages of array 
// Fast lookups
// Fast push / pop
// Ordered



//disadvantages
//slow inserts
// slow deletes
//fixed size





class MyArray{

    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }
    
    push(item){
        this.data[this.length] = item; // [this.lenght] can also be anthing its just suposed to be an object key
        this.length++;
        return this.length;
    }

    pop(){
        const lastitem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastitem;
    }

    delete(index){
        this.#shiftItem(index);
    }

    #shiftItem(index){
        // O(n) operation
        for(let i = index; i < this.length - 1; i++){
            //shifting the array backwards
            this.data[i] = this.data[i + 1];
        }
        delete this.data[--this.length];
    }
}


const newArray = new MyArray();

newArray.push('hi');
newArray.push('you');
//console.log(newArray);
// newArray.pop()
//console.log(newArray);
newArray.push('!');
newArray.push('*');
newArray.push('R');
newArray.push('J');
console.log(newArray);


newArray.delete(2);
console.log(newArray);


//works in java aswell O(2n) = O(n)
console.log('Hi my name is mathew'.split('').reverse().join(''));

//unpack then put in array then reverse then join O(2n) = O(n)
console.log([...'Hi my name is mathew'].reverse().join(''));

//O(n + a + b)
const mergeSortedArrays = (array1, array2) =>{

    //if both are absent
    if(!(array1 || array2)){
        console.log("Empty");
        return 0;
    }

    //if one of them are absent
    if(!array1){
        sorter(array2);
        return;
    }else if(!array2){
        sorter(array1);
        return;
    }


    // O(a + b)
    const newArray = [...array1, ...array2];

    //we have to impliment the comparator because the array is treated like a string by default when sorting

    //newArray.sort((a, b) => a - b);
    sorter(newArray);

    console.log(newArray);
};

    //O(n)
const sorter = array => array.sort((a, b) => a - b);



mergeSortedArrays([0,3,4,31], [4,6,30]);
mergeSortedArrays(undefined,undefined);
mergeSortedArrays(undefined,[4,6,30]);
mergeSortedArrays([0,3,4,31],undefined);



