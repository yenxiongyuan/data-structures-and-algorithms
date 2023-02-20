"use strict";

//class is an object
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert #3
  insert(value) {
    //Insert #4
    const oldHead = this.head; //Insert #4
    this.head = new Node(value); // Insert #3, this = LindedList
    this.head.next = oldHead; //Insert #4

    // or
    // this.head = new Node(value, this.head); Insert #4 new Node(value, this.head = next, this.head before reassigned)
  }

  // To string #2 overwrite the toString to parent
  toString() {
    let current = this.head; //use let will change
    let text = "";

    // walk around
    while (current) {
      //current is = null(falsy) or current is = Node(truthy)
      // do something
      text += `{ ${current.value} } -> `; // `{ ${current.value} } -> ` = '{ bear } -> { alligator } ->' and text + "NULL" for the return

      current = current.next; // move to next = current.next, move to last one is null and out of while loop
    }
    // return '{ bear } -> { alligator } -> NULL';

    return text + "NULL";
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

  // Insert #2
class Node {
                      //null= default value for next
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
