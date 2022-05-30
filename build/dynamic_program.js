"use strict";
//interviewbit.com
function memoizedAddTo80() {
    let cache = {};
    //we used closure when we don't want cache to be global variable
    return function (n) {
        //a child function
        if (n in cache) {
            //n in cache is the same as cache[n] != null
            return cache[n]; //using a hash table or an object
        }
        else {
            console.log("long time");
            cache[n] = n + 80;
            return cache[n];
        }
    };
}
const memoized = memoizedAddTo80(); //calling the child function
//console.log("1", memoized(5)); //because of clousure we are able to access the cache inside the child function
//console.log("2", memoized(6));
//dynamic programming turns a recursive function time complexity o(2^n) to o(n)
let calculations = 0;
function fibonacciMaster() {
    //o(n)
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        }
        else {
            if (n < 2) {
                return n;
            }
            else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    };
}
const fasterFib = fibonacciMaster();
//console.log("DP ", fasterFib(10));
//console.log("we did " + calculations + " calculations");
//another way to implement dynamic programming
//it avoids recursion, this is a bottom up approach lie start from the first index
function fibonacciMaster2(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        calculations++;
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}
const faster2 = fibonacciMaster2(100);
console.log("DP ", faster2);
console.log("we did ", calculations, " calculations");
function houseRobbing() {
    //let cache: object = {};
    return function (nums) {
        const length = nums.length;
        if (length === 0) {
            return 0;
        }
        else if (length === 1) {
            return nums[0];
        }
        const house = [];
        house[0] = nums[0];
        house[1] = Math.max(nums[0], nums[1]);
        for (let i = 2; i < length; i++) {
            house[i] = Math.max(nums[i] + house[i - 2], house[i - 1]);
        }
        return house;
    };
}
const houserob = houseRobbing();
/*console.log(
  "dynamic program is ",
  houserob([1, 3, 4, 4, 3, 3, 7, 2, 3, 4, 5, 1])
);*/
function buySellStock() {
    return function (prices) {
        let maxProfit = 0;
        let minPrice = Number.MAX_VALUE;
        for (let i = 0; i < prices.length; i++) {
            if (minPrice > prices[i]) {
                minPrice = prices[i];
            }
            else if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }
        }
        return maxProfit;
    };
}
const stock = buySellStock();
//console.log("the profit is ", stock([7, 1, 5, 3, 6, 4]));
function climbStairs() {
    return function (n) {
        if (n == 1) {
            return 1;
        }
        let first = 1;
        let second = 2;
        for (let i = 3; i <= n; i++) {
            let third = first + second;
            first = second;
            second = third;
        }
        return second;
    };
}
const climb = climbStairs();
console.log(climb(3));
