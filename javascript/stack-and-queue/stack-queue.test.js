'use strict';

// equivalent imports
// const { Stack, Queue } = require('./index.js');
const { Stack, Queue } = require('./');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack(); // 1. create new stack
    stack.push(1); // 2. push in the value

    expect(stack.top.value).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack(); // 1. create new stack
    stack.push(1); // 2. push in the value
    stack.push(2); // 2. push in the value
    stack.push(3); // 2. push in the value

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop(); // return the pop value
    expect(poppedValue).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull(); // node is = null, no value

  });
  it("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });
});





