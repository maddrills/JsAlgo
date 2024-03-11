"use strict";
// last in first out
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  #newNode(val) {
    return new Node(val);
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = this.#newNode(value);
    //check if SLL is empty
    if (!this.top) {
      this.top = node;
      this.bottom = node;
      this.length++;
      return this;
    }
    node.next = this.top;
    this.top = node;
    this.length++;
    return this;
  }

  pop() {
    //check if node is empty
    if (!this.top) {
      return undefined;
    }
    if (this.top === this.bottom) {
      //then we are at the bottom
      this.bottom = null;
    }
    //asign node to head
    const node = this.top;
    //move head to next node
    this.top = this.top.next;
    this.length--;
    //finally return the node
    return node;
  }

  //isEmpty
}

const myStack = new Stack();

console.log(myStack.push(5));
console.log(myStack.push(7));
console.log(myStack.push(3));
console.log(myStack.push(9));
console.log(myStack.push(12));
console.log(myStack.push(33));

console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
