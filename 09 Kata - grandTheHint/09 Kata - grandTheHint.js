/*
Write in vanilla Javascript a function.
Given a sentence, return an array of strings which gradually reveals the next letter in 
every word at the same time. Use underscores to hide the remaining letters.  
*/

// Data to test.
console.log(grantTheHint("Hello World!"));
console.log(grantTheHint("The Life of Pi"));

// Initial created function
function grantTheHint(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");
  
  // Initialize the result array with the initial state of the sentence
  const result = ["_".repeat(sentence.length)];
  
  // Loop through each letter of each word, gradually revealing the next letter
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      // Compute the index of the current letter in the sentence
      const index = sentence.indexOf(word[j], result[i].lastIndexOf("_"));
      if (index >= 0) {
        // Replace the underscore with the current letter
        const newState = result[result.length - 1].substring(0, index) + word[j] + result[result.length - 1].substring(index + 1);
        result.push(newState);
      }
    }
    // Add a space to the result after each word
    result.push(result[result.length - 1] + " ");
  }
  
  // Trim the trailing space from the last element of the result
  result[result.length - 1] = result[result.length - 1].trim();
  
  // Return the result array
  return result;
}
