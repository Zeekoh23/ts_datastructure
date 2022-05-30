"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor(size) {
        this.data = [];
        this.data = new Array(size); //a size momory to hold value pairs
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
        }
        return hash;
    } //o(1) because hash functions are very fast regardless of the loops
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = []; //we have one massive array, when we create a new array we put that new array into it
        }
        this.data[address].push([key, value]);
        return this.data;
    } //o(1)
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        //console.log(currentBucket);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    } //if there is no collision it will be o(1) otherwise o(n)
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    } //allows us to loop through all the keys in the hash table
}
/*const myHashTable = new HashTable(3);
//console.log(myHashTable.set("grapes", 10000));
myHashTable.set("apples", 677);
myHashTable.set("oranges", 2);*/
//console.log(myHashTable.get("apples"));
//console.log(myHashTable.keys());
/*class HashTable1<T> {
  data: LinkedList1<T>[] = [];

  constructor(size: number) {
    this.data = new Array(size); //a size momory to hold value pairs
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
    }
    return hash;
  } //o(1) because hash functions are very fast regardless of the loops

  set(key: string, value: T) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = new LinkedList1<T>([key, value]); //we have one massive array, when we create a new array we put that new array into it
    }
    this.data[address].append([key, value]);
    return this.data;
  } //o(1)

  get(key: string) {
    let address = this._hash(key);
    const currentBucket: LinkedList1<T> = this.data[address];
    //console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } //if there is no collision it will be o(1) otherwise o(n)
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  } //allows us to loop through all the keys in the hash table
}*/
function firstRecurringCharacter(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] == input[j]) {
                console.log(input[i]);
                return input[i];
            }
        }
    }
    return undefined;
} //time complexity of 0(n^2) and space complexity of 0(1)
//console.log(firstRecurringCharacter([1, 2, 3, 2]));
function firstRecurringCharacter2(input) {
    let map = {}; //space complexity of 0(n)
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        }
        else {
            map[input[i]] = i;
        }
        console.log(map);
    }
    return undefined;
} //time complexity of 0(n) space complexity of 0(n)
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
