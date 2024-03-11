"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  #newNode(val) {
    return new Node(val);
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    if (!this.first) {
      //queue is empty
      this.first = this.#newNode(value);
      this.last = this.first;
      this.count++;
      return this;
    }

    // if queue alredy has a node
    const node = this.#newNode(value);
    this.last.next = node;
    //now point to current node
    this.last = node;
    this.count++;
    return this;
  }

  //removing an element
  dequeue() {
    //check if the queue is empty
    if (!this.first) {
      return undefined;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // remove in a FIFO maner
    let firstInLine = this.first;
    this.first = this.first.next;
    firstInLine.next = null;
    return firstInLine;
  }
}

const queue = new Queue();

//first in
console.log(queue.enqueue(55));
console.log(queue.enqueue(5));
console.log(queue.enqueue(10));
console.log(queue.enqueue(40));
console.log(queue.enqueue(20));
console.log(queue.enqueue(60));
console.log(queue.enqueue(77));

//first out
console.log(queue.peek());

console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
console.log("Peek :", queue.dequeue());
