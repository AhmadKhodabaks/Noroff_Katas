
/*Write a function that returns true if there exists at least one number that is larger than or equal to n, and return false for an empty array  */

// Data to test.
const number = 5;
const array = [5, 3, 15, 22, 4];
// const array = [1, 2, 3, 4, 5];
// const array = [4, 3, 3, 3, 2, 2, 2];
// const array = [-10, -99, -57, -4];
// const array = [[5]];
// const array = [99, 99];
// const array = [];


console.log(existsLargerNumber(array, number));

// Created function
function existsLargerNumber(arr, n) {
    if (arr.length === 0) return false;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= n) {
        return true;
      }
    }
    return false;
  }