"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList1 = exports.LinkedList = void 0;
let obj1 = { a: true };
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
class Node1 {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor(val) {
        (this.head = {
            value: val,
            next: null,
            prev: null,
        }),
            (this.tail = this.head);
        this.length = 1;
    }
    append(value) {
        const newNode = new Node1(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node1(value);
        //this.head.next = newNode;
        //this.head = this.head.next;
        newNode.next = this.head;
        this.head.prev = newNode;
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
    insert(index, value) {
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
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        //check input
        if (index >= this.length || index <= -1) {
            return "invalid index";
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = follower.next;
        follower.prev = leader.prev;
        this.length--;
        return this.printList();
    }
    reverse() {
        //check input
        if (this.head.next == null) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
        //return this;
    }
}
exports.LinkedList = LinkedList;
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(1);
//console.log(myLinkedList.prepend(21));
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
class LinkedList1 {
    constructor(val) {
        (this.head = {
            value: val,
            next: null,
            prev: null,
        }),
            (this.tail = this.head);
        this.length = 1;
    }
    append(value) {
        const newNode = new Node1(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node1(value);
        //this.head.next = newNode;
        //this.head = this.head.next;
        newNode.next = this.head;
        this.head.prev = newNode;
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
    insert(index, value) {
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
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        //check input
        if (index >= this.length || index <= -1) {
            return "invalid index";
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = follower.next;
        follower.prev = leader.prev;
        this.length--;
        return this.printList();
    }
    reverse() {
        //check input
        if (this.head.next == null) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
        //return this;
    }
}
exports.LinkedList1 = LinkedList1;
//myLinkedList.remove(2);
//console.log(myLinkedList.printList());
//console.log(myLinkedList.reverse());
/*myLinkedList.prepend(6);
//console.log(myLinkedList);
//
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.remove(1));

console.log(myLinkedList.insert(0, 20));*/
