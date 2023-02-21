/*
Write a vanilla JavaScript function that that will find all the anagrams of a word from a list.  .
• What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.
• You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
*/

// Data to test.
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
  
// Initial created function
function anagrams(word, words) {
    const sortedWord = word.toLowerCase().split('').sort().join(''); // this will sort the letters of the word alphabetically (i.e., aabb)
    return words.filter(w => { // will iterate over each 'w' in the words array
      const sortedW = w.toLowerCase().split('').sort().join(''); // this will sort the letters of all the words in the array alphabetically (i.e., aabb, abc, aabb, aadd)
      return sortedW === sortedWord;
    });
  }
  