// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let curr = this.head;

    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curr = this.head;
    if (this.head === null) {
      return null;
    }
    while (curr.next !== null) {
      curr = curr.next;
    }
    return curr;
  }
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
  }

  removeLast() {
    // REVIEW ME AGAIN!
    let curr = this.head;
    let prev;

    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    let newLastNode = new Node(data);
    let currentLastNode = this.getLast();
    if (currentLastNode) {
      currentLastNode.next = newLastNode;
    } else {
      this.head = newLastNode;
    }
  }

  getAt(index) {
    let count = 0;
    let curr = this.head;
    if (index === 0) {
      return this.head;
    }
    // while (this.size() >= index && count < index) {
    //   curr = curr.next;
    //   count++;
    // }

    // return curr;
    // MY SOLUTION ^^

    while (curr) {
      if (index === count) {
        return curr;
      }
      count++;
      curr = curr.next;
    }
    return null;
  }

  removeAt(index) {
    // THIS IS MY SOLUTION, MAY HAVE A BUG?
    if (!this.head) {
      return;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    let next = this.getAt(index + 1);
    let prev = this.getAt(index - 1);
    prev.next = next;
  }

  insertAt(data, index) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    if (this.size() === index || index > this.size()) {
      this.insertLast(data);
      return;
    }

    let curr = this.getAt(index - 1);
    let after = this.getAt(index);
    curr.next = newNode;
    newNode.next = after;
  }

  forEach(fn) {
    let count = this.size();
    let node = this.head;

    while (count > 0) {
      fn(node);
      node = node.next;
      count--;
    }
  }
}

module.exports = { Node, LinkedList };
