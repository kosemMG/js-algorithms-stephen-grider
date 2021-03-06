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

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(record) {
    this.stack1.push(record);
  }

  remove() {
    this.swap(this.stack1, this.stack2);

    const result = this.stack2.pop();

    this.swap(this.stack2, this.stack1);

    return result;
  }

  peek() {
    this.swap(this.stack1, this.stack2);

    const result = this.stack2.peek();

    this.swap(this.stack2, this.stack1);

    return result;
  }

  swap(stackA, stackB) {
    while (stackA.peek()) {
      stackB.push(stackA.pop());
    }
  }
}

module.exports = Queue;
