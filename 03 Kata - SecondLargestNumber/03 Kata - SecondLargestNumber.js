/*Write a function that takes an array of numbers and returns the second largest number.
1. If only one number exists, return that number.
2. When array only has two numbers that are equal, return 0.
3. Return 0 for an empty array.  */

// Data to test.
console.log(secondLargest([10, 40, 30 , 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
console.log(secondLargest([54, 23, 11, 17, 10]));
console.log(secondLargest([1, 1]));
console.log(secondLargest([1]));
console.log(secondLargest([]));


// Initial created function
function secondLargest1(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return 0;
    }
  
    // Check if the array only has one number
    if (numbers.length === 1) {
      return numbers[0];
    }
  
    // Check if the array only has two equal numbers
    if (numbers[0] === numbers[1]) {
      return 0;
    }
  
    // Sort the array in descending order
    numbers.sort((a, b) => b - a);
  
    // Find the second largest number
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] !== numbers[0]) {
        return numbers[i];
      }
    }
  
    // If all numbers are equal, return the first number
    return numbers[0];
  }
  
 // A more shorter code giving the same results. 
  function secondLargest(numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];
    if (numbers[0] === numbers[1]) return 0;
  
    let largest = Math.max(...numbers);
    let secondLargest = Math.max(...numbers.filter(n => n < largest));
    return secondLargest;
  }