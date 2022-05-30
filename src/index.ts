//import dotenv from "dotenv";
//dotenv.config({ path: "./config.env" });

import express from "express";

const app = express();

const nemo1: Array<string> = ["nemo"];

const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat"];

const large = new Array<string>(100000).fill("nemo");

function findNemo1(array: string[]): void {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("found NEMO");
      break;
    }
  }
  let t1 = performance.now();
  console.log("call to find nemo too " + (t1 - t0) + " milliseconds");
}

const findNemo2 = (array: string[]) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("found nemo!");
    }
  }
};

//findNemo2(everyone);

/*const boxes: string[] = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array: string[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  } //nested loops is usually0(n * n) 0(n^2)

  //while loops not nested are 0(n + b) giving different terms
}

logAllPairsOfArray(boxes);*/

//findNemo1(everyone);

/*const boxes: number[] = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(box: number[]) {
  console.log(box[0]);
  console.log(box[1]);
}

logFirstTwoBoxes(boxes);*/

/*const server = app.listen(3000, () => {
  console.log("app running on port 3000");
});*/
