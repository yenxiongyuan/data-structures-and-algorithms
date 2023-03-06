"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// binary tree
class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {  // notice the pattern!!!!
    const outcome = [];

    // recursive helper funciton
    const traverse = (node) => {
      // do the thing FIRST if it's PRE-ORDER
      // base case!
      outcome.push(node.value);

      // left and right recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    // GET THE PARTY STARTED!
    traverse(this.root);

    return outcome;
  }

  inOrder() {
    const traverse = (node) => {
      // recursive left case
      if (node.left) traverse(node.left);

      // base case
      console.log(node.value);

      // recursive right case
      if (node.right) traverse(node.right);

    };
    // get the party started
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {
      // recursive left case
      if (node.left) traverse(node.left);

      // recursive right case
      if (node.right) traverse(node.right);

      // base case
      console.log(node.value);

    };
    // get the party started
    traverse(this.root);
  }
}

module.exports = { Node, Tree };
