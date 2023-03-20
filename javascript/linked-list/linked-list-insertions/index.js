"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add new Node to the last Node
  // this function accept a value
  // append function only works for the first time
  append(value){
    let newNode = new Node(value); // creat a new node using the value passed to the function
    // if there is no head property on the list
    // if run only the list is empty
    if(!this.head){
      // set the head and tail to be the newly created node
      this.head = newNode; // if empty make this.head = newNode
      this.tail = this.head; // this.tail = this.head
    } else{
      // otherwise set the next property on the tail to be the new node and
      // set the tail property on the list to be the newly created node
      this.tail.next = newNode; // set the next property on the tail to be the new node
      this.tail = newNode; // set the tail property on the list to be the newly created node
    }
    this.length++; // increment the length by one
    return this; // return the linked list
  }

  // console log every items on the list
  traverse(){
    let current = this.head; // start from the begining
    // while there is node
    while(current){
      console.log(current.value);
      current = current.next; // update current equal current.next, if there in no next exit the while loop
    }
  }

  // remove the last Node and return it
  pop(){
    if(!this.head) return undefined; // if there are no nodes in the list, return undefined
    let current = this.head; // start here
    let newTail = current; // both start here, let previous Node equal current
    //Loop through the list until you reach the tail
    while(current.next){
      // while there is something
      newTail = current; // newTail always behind current
      current = current.next; // move current forward one
    }
    // console.log(current.value);
    // console.log(newTail.value);
    this.tail = newTail; // this.tail will be the new tail
    this.tail.next = null; // this.tail.next will equal null, there is nothing come after, take out the next
    this.length--;
    // if no node reset this.head to null and this.tail to null
    // if(current === newTail)
    if(this.lengthe ===0){
      this.head = null;
      this.tail= null;
    }
    return current;
  }

  // remove the first Node and return it
  shift(){
    if (!this.head) return undefined; // if there are no node, return undefined
    let currentHead = this.head; // Store the current head propert in a varable
    this.head = currentHead.next; // Set the head property to be the current head's next property
    this.length--;
    // if no node reset this.tail to null
    if (this.lengthe === 0) {
      this.tail = null;
    }
    return currentHead; // return the value of the node removed
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

module.exports = LinkedList;
