let obj1: any = { a: true };
let obj2 = obj1; //obj2 is referencing obj1,
//obj1 is pointing to the memory that stores true,
//so both obj1 and obj2 points to the same place in memory
obj1.a = false;
for (var key in obj1) {
  var obKey = obj1[key];
  delete obj1[key];
}
//delete obj1;
//obj2 = 'hello';
//if i delete obj1, obj2 will still show a is false because that memory that keeps false is not deleted because obj2 is accessing it
//console.log('1 ' + obj1);
//console.log('2',obj2);

class Node1<T> {
  value: T;
  next: Node1<T> | null;
  prev: Node1<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T> {
  head: Node1<T> | null;
  tail: Node1<T> | null;
  length: number;
  constructor(val: T) {
    (this.head = {
      value: val,
      next: null,
      prev: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  append(value: T) {
    const newNode = new Node1(value);
    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: T) {
    const newNode = new Node1(value);
    //this.head.next = newNode;
    //this.head = this.head.next;
    newNode.next = this.head;
    this.head!.prev = newNode;

    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: T) {
    //check input
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node1(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader!.next;
    leader!.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower!.prev = newNode;
    this.length++;
    console.log(this);
    return this.printList();
  }
  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode!.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    //check input
    if (index >= this.length || index <= -1) {
      return "invalid index";
    }
    const leader = this.traverseToIndex(index - 1);
    const follower = leader!.next;
    leader!.next = follower!.next;
    follower!.prev = leader!.prev;
    this.length--;
    return this.printList();
  }

  reverse() {
    //check input
    if (this.head!.next == null) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first!.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head!.next = null;
    this.head = first;
    return this.printList();
    //return this;
  }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(1);

//console.log(myLinkedList.prepend(21));
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());

export class LinkedList1<T> {
  head: Node1<(string | T)[]> | null;
  tail: Node1<(string | T)[]> | null;
  length: number;
  constructor(val: (string | T)[]) {
    (this.head = {
      value: val,
      next: null,
      prev: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  append(value: (string | T)[]) {
    const newNode = new Node1(value);
    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: (string | T)[]) {
    const newNode = new Node1(value);
    //this.head.next = newNode;
    //this.head = this.head.next;
    newNode.next = this.head;
    this.head!.prev = newNode;

    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: (string | T)[]) {
    //check input
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node1(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader!.next;
    leader!.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower!.prev = newNode;
    this.length++;
    console.log(this);
    return this.printList();
  }
  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode!.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    //check input
    if (index >= this.length || index <= -1) {
      return "invalid index";
    }
    const leader = this.traverseToIndex(index - 1);
    const follower = leader!.next;
    leader!.next = follower!.next;
    follower!.prev = leader!.prev;
    this.length--;
    return this.printList();
  }

  reverse() {
    //check input
    if (this.head!.next == null) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first!.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head!.next = null;
    this.head = first;
    return this.printList();
    //return this;
  }
}
//myLinkedList.remove(2);
//console.log(myLinkedList.printList());
//console.log(myLinkedList.reverse());
/*myLinkedList.prepend(6);
//console.log(myLinkedList);
//
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.remove(1));

console.log(myLinkedList.insert(0, 20));*/
