const array = [
  {
    tweet: "hi",
    date: 2012,
  },
  {
    tweet: "my",
    date: 2017,
  },
  {
    tweet: "teddy",
    date: 2014,
  },
];
array[0]; //first tweet 0(1)
array[array.length - 1]; //last tweet 0(1)

const strings: string[] = ["a", "b", "c", "d"];
strings[2];
strings.push("e"); //0(1)  adds e at the end of the array strings
//console.log(strings);
strings.pop(); //0(1) removes the last element in an array
//console.log(strings);
strings.unshift("x"); //0(n)  adds x at the beginning of the array, so we are looping through the array and adding
//console.log(strings);
strings.splice(2, 0, "alien"); //0(n) we looped through half of the array and got 0(n/2) but we remove constants and it turned to 0(n) 2 means we are starting at index of 2 and 0 means we are not deleting any index and we add a string alien before the index 2
//console.log(strings);

class Player {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name: string, type: string) {
    super(name, type);
  }

  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}

//const wizard = new Wizard("Shelly", "Healer");
//const wizard1 = new Wizard("Shawn", "Dark Magic");

//console.log(wizard.play());
//console.log(wizard1);

//how to create an array
class MyArray {
  length: number;
  data: any;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index];
  }
  push(item: string) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index: number) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

/*const newArray = new MyArray();
newArray.push("hi");
console.log(newArray);
newArray.push("you");
newArray.push("!");
console.log(newArray);
newArray.push("are");
newArray.push("nice");
//newArray.pop();
newArray.delete(0);
console.log(newArray);
newArray.delete(1);
console.log(newArray);*/

function reverse(str: string) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a string";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (var i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  //console.log(backwards);
  const reverse = backwards.join("");
  console.log(reverse);
  return reverse;
}

function reverse2(str: string): string {
  const reverse = str.split("").reverse().join("");
  console.log(reverse);
  return reverse;
}

const reverse3 = (str: string) => [...str].reverse().join("");
//...str the dot dot dot is the spread operator
//console.log(reverse3("Hi myy name is Isaac Eze"));
//reverse2("Hi myy name is Isaac Eze");

//reverse("Hi myy name is Isaac Eze");

function mergeSortedArrays(arr1: any, arr2: any) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;
  //check input
  /* if (
    (!arr1 && !arr2) ||
    (arr1.length < 2 && arr2.length < 2) ||
    (typeof arr1 !== "number" && typeof arr2 !== "number")
  ) {
    return "please put a right input";
  }*/

  while (arr1Item || arr2Item) {
    if (arr2Item === undefined || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  //console.log(mergedArray);
  const sort = mergedArray.sort();
  //console.log(sort);
  return mergedArray;
}

mergeSortedArrays([2, 5, 7, 3, 6], [9, 2, 9, 5, 5]);

function twoSumInArray(nums: number[], target: number) {
  //let target = 9;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
    /*let x = nums[i++ + 1];
    let sum = nums[i] + nums[i++];
    if (sum != target) {
      nums[i++] + x;
    } else {
      console.log();
    }*/
  }
}

//console.log(twoSumInArray([2, 4, 8, 23, 5], 13));
//console.log(twoSumInArray([3, 2, 4], 6));

interface HashTable1<T> {
  [key: number]: T;
}

function HasPairWithSum(nums: number[], sum: number) {
  //var comp: HashTable1<number> = {};
  const comp = new Set();
  //let index = 0;
  for (let index = 0; index < nums.length; index++) {
    if (comp.has(nums[index])) {
      return true;
    }

    console.log(comp.add(sum - nums[index]));
  }
  //for(index of nums)
  return false;
}
//console.log(HasPairWithSum([1, 2, 4, 4], 8));

//console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));

interface map {
  key: any[];
}
class CommonItem<T> {
  map1: any = {
    //key: arr1
  };
  containsCommonItem2(arr1: T[], arr2: T[]) {
    //loop through first array and create object where properties === items in the array
    /*var map1: object = {
      key: arr1
    };*/
    //let map: any = {};
    for (let i = 0; i < arr1.length; i++) {
      if (!this.map1[arr1[i]]) {
        const item = arr1[i];
        this.map1[item] = true;
        console.log(this.map1);
      }
    }

    //loop through 2nd array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
      if (this.map1[arr2[j]]) {
        return true;
      }
    }
    return false;
    //0(n) space complexity for this function, takes more space
  } //0(a + b) time complexity is better than the previous contains function

  containsCommonItem3(arr1: any[], arr2: any[]) {
    return arr1.some((item) => arr2.includes(item));
  }

  //brute force approach
  containsCommonItem(arr1: string[], arr2: string[]) {
    for (let i = 0; i < arr1.length; i++) {
      //0(n)
      for (let j = 0; j < arr2.length; j++) {
        //0(n)
        if (arr1[i] === arr2[j]) {
          return true;
        }
      }
    } //nested for loops causes time complexity of 0(a * b) which results to 0(n) this is really slow and hard to read
    //0(1) space complexity for this function
    return false;
  }
}

const common = new CommonItem();
console.log(common.containsCommonItem2(["a", "r", "e"], ["e", null, []]));

function maxSubArray(a: number[]) {
  var size = a.length;
  var maxint = Math.pow(2, 53);
  var max_so_far = -maxint - 1;
  var max_ending_here = 0;

  for (var i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;
    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function pushZeroesToEnd(arr: number[]) {
  var count: number = 0;
  var i: number = 0;

  while (i < arr.length) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
    i++;
  }

  while (count < arr.length) {
    arr[count++] = 0;
  }

  return arr;
}

//console.log(pushZeroesToEnd([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));

function containsDuplicate(arr: number[]) {
  if (arr == null || arr.length == 0) return false;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      return true;
    }
  }
  return false;
}

//console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

function rightRotateByKSteps(arr: number[], k: number) {
  //check input
  if (k < 0 || k >= arr.length) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      // Printing rightmost
      // kth elements
      console.log(arr[arr.length + i - k] + "");
    } else {
      // Prints array after
      // 'k' elements
      console.log(arr[i - k] + "");
    }
  }
}

//rightRotateByKSteps([1, 2, 3, 4, 5], 2);

function LongestWord(sen: string) {
  // code goes here
  if (sen.length <= 0) {
    return;
  }

  var str = sen.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
  var split = str.split(" ");
  var longestWord = 0;
  var long = "";

  for (var i = 0; i < split.length; i++) {
    if (split[i].length > longestWord) {
      longestWord = split[i].length;
      long = split[i];
    }
  }
  return long;
}

// keep this function call here
//console.log(LongestWord("I love dogs"));
