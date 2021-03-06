"use strict";
const spanish = ["unico", "arbol", "cosas", "futbol"];
const a = spanish.sort((a, b) => {
    return a.localeCompare(b);
});
//console.log(a);
const basket = [2, 65, 34, 2, 1, 7, 8];
const basket1 = basket.sort((a, b) => {
    return a - b;
});
//console.log(basket1);
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                //swap numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                //return ;
            }
        }
    }
    return array;
}
//console.log(bubbleSort(numbers));
function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        //set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                //update minimum if current is lower that what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}
//console.log(selectionSort(numbers));
/*function insertionSort(array: number[]) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (let j = 1; j < 1; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  //return array;
}*/
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = i;
        while (current > 0 && array[current - 1] > array[current]) {
            [array[current - 1], array[current]] = [
                array[current],
                array[current - 1],
            ];
            current--;
        }
    }
    return array;
}
//console.log(insertionSort(numbers));
function mergeSort(array) {
    const length = array.length;
    if (length === 1) {
        return array;
    }
    //split array into right and left
    const middle = Math.floor(length / 2); //math.floor rounds to the nearest whole number
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    console.log("left: ", left);
    console.log("right: ", right);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    //compares the left and right array and if leftindex is less than right push to left
    //but if its greater push to the right
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    console.log(left, right);
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const answer = mergeSort(numbers);
console.log(answer);
function quickSort(array, left, right) {
    const length = array.length;
    let pivot;
    let partitionIndex;
    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);
        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}
function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;
    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}
function swap(array, firstIndex, seconIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[seconIndex];
    array[seconIndex] = temp;
}
//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
//console.log(numbers);
