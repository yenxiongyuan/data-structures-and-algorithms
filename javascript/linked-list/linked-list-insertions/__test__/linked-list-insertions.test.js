'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List Insertions', () => {

  it('After append 2 values', () => {
    const list = new LinkedList();
    list.append('alpha');
    list.append('bravo');

    expect(list.head.value).toEqual('alpha');
    expect(list.tail.value).toEqual('bravo');
    expect(list.tail.next).toBeNull();
  });
});
