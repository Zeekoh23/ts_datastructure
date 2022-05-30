let counter = 0;
function inception(): any {
  console.log(counter);
  if (counter > 3) {
    return "done";
  } //identify the base case
  counter++;
  return inception(); //identify the recursive case
} //get closer and closer to the base case and return when needed and pops functions of the stack

//console.log(inception());

function findFactorialRecursive(number: number): any {
  console.log(number);
  console.log("*");

  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
} //time complexity of 0(n)
//console.log(findFactorialRecursive(10));

function findFactorialIterative(number: number) {
  let answer = number;
  //let ans = number;
  /*if (number === 2) {
    answer = 2;
  }*/
  /*for (let i = 2; i <= number; i++) {
    console.log(i);
    console.log("*");
    answer = answer * i;
  }*/
  console.log(number);
  console.log("*");
  for (let i = number - 1; i >= 2; i--) {
    console.log(i);
    console.log("*");
    if (number === 2) {
      return 2;
    }
    answer = answer * i;
  }
  return answer;
}

//console.log(findFactorialIterative(4));

function fibonacciIterative(n: number) {
  let arr = [0, 1];
  //i <= n = i < n+1
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
//console.log(fibonacciIterative(8));
//in recursion we are adding every nested functions calls to the stack which increases our memory complexity
//fibonacci recursion takes 0(2^n) which is not efficient
//0,1,1,2,3,5,8,13,21,34,55,89,144,233 adding the first and 2nd index to get the third and traversing and adding 2nd and 3rd to get the 4th and so on
//finding the value of an index in fibonacci
let calculations1 = 0;
function fibonacciRecursive(n: number): any {
  //not an ideal solution because of time it takes to run the function
  //this function runs exactly the times the value of the index we call in the parameters
  calculations1++;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} //time complexity is 0(2^N) exponential time, the time to run this function is pretty big

console.log("slow recursions " + fibonacciRecursive(8));
console.log("fibonacci recursions " + calculations1 + " calculations");

function reverseString(str: string) {
  let arrayStr = str.split("");
  let reversedArray: string[] = [];

  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array: string[]) {
    if (array.length > 0) {
      reversedArray.push(array.pop() as string);
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

function reverseStringRecursive(str: string): any {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

//console.log(reverseStringRecursive("eze isaac"));
console.log(reverseString("eze isaac"));
