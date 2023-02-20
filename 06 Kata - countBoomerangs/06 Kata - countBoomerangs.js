/*
 Create a function that returns the total number of  boomerangs in an array.
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
To illustrate: 
[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2] 
// 3 boomerangs in this sequence:
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last. An appropriate error should be thrown if an empty array is passed into the function, or if an array with too few elements for a boomerang to exist. Throw an appropriate error if an element of the input array is not a number. 
*/

// Data to test.
countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
countBoomerangs([4, 4, 4, 9, 9, 9, 9]);
countBoomerangs([1, 7, 1, 7, 1, 7, 1]);
countBoomerangs([]);
countBoomerangs([1, 7]);
countBoomerangs([1, 7, 1, 7, 'one', 7, 1]);

// Initial created function
function countBoomerangs(arr) {
    //First, it checks if the array is empty or has fewer than 3 elements, and throws an appropriate error if so.
    if (arr.length < 3) {
      throw "Array must contain at least 3 elements";
    }

    // It initializes a variable count to 0, which will keep track of the number of boomerangs found.
    let count = 0;

    //It loops through the array using a for loop, starting from the first element and ending two elements before the end of the array. This is because we need to check groups of 3 elements, and we don't want to go out of bounds of the array.
    for (let i = 0; i < arr.length - 2; i++) {        
        //Within the loop, we first check if the current element is a number. If it's not, we throw an error.
      if (typeof arr[i] !== "number") {
        throw "Array must only contain numbers";
      }
      //We then check if the current element, arr[i], is equal to the third element in the group, arr[i+2], and not equal to the second element in the group, arr[i+1]. If this condition is true, we've found a boomerang, so we increment the count variable.
      if (arr[i] === arr[i+2] && arr[i] !== arr[i+1]) {
        count++;
      }
    }
    
    //After the loop finishes, we return the count variable, which represents the total number of boomerangs found in the array.
    return console.log(count);
  }
  
  
  
  