class Node1<T> {
  //<> is type assertion for creating a generic T which is reusable and you can put any primitive type in it
  value: T;
  next: Node1<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  top: Node1<T> | null = null;
  bottom: Node1<T> | null = null;
  length: number = 0;

  peek() {
    return this.top;
  }

  //push to the top of the stack
  push(value: T) {
    let newnode = new Node1(value);
    if (this.length === 0) {
      this.top = newnode;
      this.bottom = newnode;
    } else {
      const holdingPointer = this.top;
      this.top = newnode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  //remove item from the top of the stack
  pop() {
    //if(this.top === null)
    if (!this.top) {
      return null;
    }
    //if(this.length === 0)
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

/*const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("linkedin");
//console.log(myStack.peek());
console.log(myStack.pop());*/

class StackwithArray<T> {
  array: T[];

  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array[this.array.length - 1] === undefined) {
      return null;
    }
    return this.array[this.array.length - 1];
  }

  push(value: T) {
    this.array.push(value);

    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

/*const myStack1 = new StackwithArray();
myStack1.push("google");
myStack1.push("udemy");
console.log(myStack1.push("discord"));
console.log(myStack1.peek());
console.log(myStack1.pop());*/

class Queue<T> {
  first: Node1<T> | null = null;
  last: Node1<T> | null = null;
  length: number = 0;

  peek() {
    return this.first;
  }

  //adds an item to the queue
  enqueue(value: T) {
    const newNode = new Node1(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = this.last!.next;
    }
    this.length++;
    return this;
  }

  //removes an item from the front of the list
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

/*const myStack2 = new Queue();
myStack2.enqueue("Ada");
myStack2.enqueue("Paul");
console.log(myStack2.enqueue("Isaac"));
console.log(myStack2.dequeue());*/

class QueuesWithStack<T> {
  first: T[];
  last: T[];

  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value: T) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop() as T);
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop() as T);
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myStack4 = new QueuesWithStack();
myStack4.enqueue("Joy");
myStack4.enqueue("Matt");
myStack4.enqueue("Pavel");
console.log(myStack4.dequeue());
console.log(myStack4.peek());
