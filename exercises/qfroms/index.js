// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// REVIEW THIS!! APRIL 22, 2020
const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  add(val) {
    this.first.push(val);
  }
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let firstOut = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return firstOut;
  }
  peek() {
    return this.first.data[0];
  }
}

module.exports = Queue;
