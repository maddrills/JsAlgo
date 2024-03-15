"use strict";


//hash table is a mix of arrays with its index as the hash and [key value] as its data


class HashTable {

    constructor(size){
      this.data = new Array(size);
    }
  
    // private
    #hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }


    //set a value
    // we need the key to be the hash 
    //the value to be the value
    set(key, value){

        const hashCode = this.#hash(key);
        //console.log(hashCode);

        //check if array position is empty 
        if(!this.data[hashCode]){
            //insert the data there
            this.data[hashCode] = [];
            this.data[hashCode].push([key, value]);
            //console.log(this.data);
        }
        //colistion seperate chaining
        else{
            this.data[hashCode].push([key, value]);

        }
    }


    //get a value by key
    get(key){
        
        let hashCode = this.#hash(key);
        //O(1)
        const currentBucket = this.data[hashCode];
        //console.log("current hash : ",currentBucket);

        let returnVal = undefined;

        //if there is a value
        if(currentBucket){
                    //go through the seperate chaining array and find the match
                    //O(1) if only one value in chain
                    //O(n) if there is a seperate chain
            currentBucket.forEach((val, pos, full) => {
                if(val[0] == key){
                    returnVal = val[1];
                }return returnVal;
            })
        }
        return returnVal;
    }


  }
  
  const myHashTable = new HashTable(50);


  myHashTable.set('grapes', 10000);
  myHashTable.set('grapes', 10000);
  myHashTable.set('grapes', 10000);
  console.log(myHashTable.get('grapes'));
  myHashTable.set('apples', 9);
  console.log(myHashTable.get('apples'));
  console.log(myHashTable.get('monkey'));

  




