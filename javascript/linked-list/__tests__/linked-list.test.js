"use strict";

// Require our linked list implementation
const LinkedList = require("../index");

//Create an empty list
describe("Linked List", () => {
  it("should instantiate an empty linked list", () => {
    const linked = new LinkedList();

    expect(linked.head).toBeNull(); // head (Node) is undefined, set the head to null in constructor index.js
  });

  // Insert #1
  it("should insert at beginning of empty list", () => {
    const linked = new LinkedList();
    linked.insert("alligator"); // add a value (alligator) to the linked list have Node, make class Node in index.js

    expect(linked.head.value).toEqual("alligator"); // head is Node, linked.head(Node).value
    expect(linked.head.next).toBeNull();
  });

  it("should insert at beginning of populated list", () => {
    const linked = new LinkedList();
    linked.insert("alligator"); // first insert alligator current head
    linked.insert("bear"); // then insert bear, then become the current head push alligator over

    expect(linked.head.value).toEqual("bear"); //current head
    expect(linked.head.next.value).toEqual("alligator"); //Insert #4 No Link this head to old head, head is undefined. Make new head add to old head in index.js at (insert) want to keep alligator in process
    expect(linked.head.next.next).toBeNull(); // 3 value will be head.next.next.next
  });

  // To string #1
  it("should display as string properly", () => {
    const linked = new LinkedList();
    linked.insert("alligator");
    linked.insert("bear");

    const linkedString = linked.toString(); //linked.toString() return object '[object, object]', need to make a toString() in index.js

    expect(linkedString).toEqual("{ bear } -> { alligator } -> NULL");
  });

  it("should know when value is included in list", () => {
    const linked = new LinkedList();
    linked.insert("alligator");
    linked.insert("bear");

    expect(linked.includes("alligator")).toBe(true);
  });

  it("should know when value is not included in list", () => {
    const linked = new LinkedList();
    linked.insert("alligator");
    linked.insert("bear");

    expect(linked.includes("cat")).toBe(false);
  });
});
