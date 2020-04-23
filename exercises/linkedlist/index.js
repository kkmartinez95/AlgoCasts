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
    // REVIEW ME!
    let currentNode = this.head;
    let prev;
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    while (currentNode.next !== null) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    prev.next = null;
  }
}

module.exports = { Node, LinkedList };
