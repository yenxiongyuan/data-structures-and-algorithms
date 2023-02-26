'use strict';

//Step #1
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Step #2
class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * adds a new node with that value to the top of the stack with an O(1) Time performance.
   * @param {*} value
   */
  //Step #3
  push(value) { // 1. push in the value
    let newNode = new Node(value); // 2. create new Node, that take the value
    newNode.next = this.top; // 3. existing top to newNode, if no top the value is null, newNode is the former top
    this.top = newNode; // 4. reassign the top to newNode
  }

  /**
   *  returns the value of the node from the top of the stack AND removes reference to that node
   */
  pop() {
    let removedValue = null; // 3. if top(node) is equal to null, then can't have a value. if nothing in the node we will remove it
    if (this.top) {
      // 1. if there is a top
      removedValue = this.top.value; // 3. if there is top in the node we will remove it
      this.top = this.top.next; // 2.
    }
    return removedValue;
  }

  peek() {
    return this.top.value; // Returns: Value of the node located at the top of the stack
  }

  isEmpty() {
    return this.top === null; // Returns: boolean, if the top = null
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      // get ready to get in line
      this.back.next = newNode;
    } else {
      // you are at the front of the line
      this.front = newNode;
    }
    // either way buddy, you are the back of the line!
    this.back = newNode;
  }

  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      // if there was only one node in q
      if (this.front === this.back) {
        // make sure the back is null after removing the last node
        this.back = null;
      }
      // no matter how many in "line", the front moves to the next.  if only one in line it moves to null, if two or more initially in line, it moves to the next in "line"
      this.front = this.front.next;
    }
    return removedValue;
  }

  peek() {
    return this.front.value; // Returns: Value of the node located in the front
  }

  isEmpty() {
    return this.front === null; // Returns: boolean, if the front = null
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(JSON.stringify(q));
console.log('--------------------');

q.dequeue();
console.log('one node removed',JSON.stringify(q));
q.dequeue();
console.log('two nodes removed', JSON.stringify(q));
q.dequeue();
console.log('three node removed',JSON.stringify(q));


module.exports = { Stack, Queue };
