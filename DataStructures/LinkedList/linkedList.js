"use strict";

const obj1 = { a: true };
const obj2 = Object.assign({}, obj1);

//shalow coppy
console.log(obj1 == obj2);

let myLinkedListObj = {
  head: {
    value: 10,
    next: {},
  },
};

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //do not repeat yourself
  #nodeCreater(val) {
    return {
      value: val,
      next: null,
    };
  }

  append(value) {
    const newNode = this.#nodeCreater(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  //prepend add to the beginingof the linked list
  //1)create aa new node
  //2)point is next field to this.head which pints to the head of the Linked list
  //3) pint head to the new node
  prePend(value) {
    const newNode = this.#nodeCreater(value);

    //new node point to head
    newNode.next = this.head;

    //point the head to newNode;
    this.head = newNode;

    //increment the size
    this.length += 1;

    return this;
  }

  //print all the values
  printlist() {
    let traveler = this.head;
    let list = `head`;
    while (traveler) {
      list = list + "->" + `(${traveler.value})`;

      traveler = traveler.next;
    }

    console.log(list + "->null");
  }

  //insert an elemnt in a perticular index
  // 1) will be create the node
  // 2) to travers the SLL till count = the position - 1
  // 3) here we point new nodes next to travers.next
  // 4) de reference travers to point to new node
  insertANodeAtPosition(position, value) {
    const newNode = this.#nodeCreater(value);
    let seek = this.head;
    let count = 1;

    // travers the list
    while (seek) {
      if (count == position - 1) {
        //start to inset the node
        newNode.next = seek.next;
        seek.next = newNode;
        console.log(count);
        break;
      }
      console.log(count);
      count++;
      seek = seek.next;
    }
  }

  delete(position) {
    let currentPos = this.head;
    let count = 0;
    //if the list is empty
    if (currentPos.next == null) {
      return "empty SLL";
    }
    //first position
    if (position == 1) {
      this.head = currentPos.next;
      currentPos = null;
      return "removed";
    }
    //if not at first position
    while (currentPos) {
      //evaluate first then ckeck

      if (++count == position - 1) {
        let deletingElement = currentPos.next;
        //de refrence currentPos.next to deletingElement.next is pointing to
        currentPos.next = deletingElement.next;
        deletingElement = null;
        this.length--;
        break;
      }
      //move to the next ele
      currentPos = currentPos.next;
    }
    return undefined;
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList.append(16));
console.log(myLinkedList.append(36));
console.log(myLinkedList.append(7));

console.log(myLinkedList.prePend(99));

//myLinkedList.insertANodeAtPosition(2, 7);

myLinkedList.insertANodeAtPosition(3, 88);

myLinkedList.printlist();

myLinkedList.delete(1);
myLinkedList.delete(2);

myLinkedList.printlist();
