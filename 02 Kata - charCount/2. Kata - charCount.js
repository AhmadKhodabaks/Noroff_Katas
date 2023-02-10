
/*Write a function that takes two strings as arguments and returns the number of times the first string (single character) is found in the second string.
1. Output must be case-sensitive
2. Strings can be converted to arrays using the split method.
3. Get the length of a string with the .length property.  */

// Data to test.
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("B", "boxer are fun"));
console.log(charCount("b", "big fat bubble"));
console.log(charCount("e", "javascript is good"));
console.log(charCount("!", "!easy!"));

// Initial created function
function charCount(char, str) {
  let strArray = str.split('');
    let count = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === char) {
        count++;
      };      
    }
    return count;
  }

// A more shorter code giving the same results.
function charCount1(char, str) {
  return str.split('').filter(c => c === char).length;
}

// A function provided by the tutor
function charCount1(char, str) {
  return [...str].filter(c => c === char).length;
}

console.log('Done processing the kata exercise. Here comes now the optional exercise.');
/* Optional: Write a function that takes one argument and returns an object containing the count for all the characters and uses the character as the key.*/

// Data to test.
console.log(countChar1("hello"));

// Initial created function
function countChar1(str) {
  let charArray = str.split('');
  let charCount = {};
  for (let i = 0; i < charArray.length; i++) {
    charCount[charArray[i]] = charCount[charArray[i]] + 1 || 1;
  }
  return charCount;
}

// A more shorter code giving the same results.
function countChar2(str) {
  return str.split('').reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {})
}