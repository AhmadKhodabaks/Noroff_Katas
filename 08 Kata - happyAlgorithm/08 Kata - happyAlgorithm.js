/*
Write a vanilla JavaScript function that given a positive integer num.
• If num is a Happy number, the string "HAPPY x" with the "x" being the number of steps necessary to reduce num to 1. 
• If num is not a Happy number, the string "SAD x" with the "x" being the number of steps necessary to enter into the infinite loop reaching so any number in the series 4, 16, 37, 58, 89, 145, 42, 20, plus the number of steps necessary to obtain again that number. 
The transformation of a single-digit number is, trivially, the square of the digit
If the given number is 1, a step is needed to establish if it's Happy To establish if a number is not happy, you have to find the number of steps necessary to obtain again a number already found (it can be a number obtained through a transformation or the same given number). 
You can expect only positive integers as input, without exceptions to handle.
*/

// Data to test.
console.log(happyAlgorithm(139));
console.log(happyAlgorithm(67));
console.log(happyAlgorithm(1));
console.log(happyAlgorithm(89));

// Initial created function
function happyAlgorithm(num) {
    const cycle = new Set(); // keep track of numbers encountered in cycle
    let steps = 0;
    let sum = num;
    
    while (sum !== 1) {
      sum = sum.toString().split('').reduce((acc, val) => acc + Math.pow(parseInt(val), 2), 0);
      steps++;
      if (cycle.has(sum)) {
        // we have encountered a cycle, not a happy number
        steps += cycle.size;
        return `SAD ${steps}`;
      }
      cycle.add(sum);
    }
    
    return `HAPPY ${steps}`;
  }
  