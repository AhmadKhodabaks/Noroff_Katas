/*
Write a vanilla JavaScript function that converts a sentence into a simplified pig latin.
• For words that begin with a vowel (a, e, i, o, u), add "way" to the end of the word.
• Otherwise, move all letters before the first vowel to the end and add "ay".
• For simplicity, no punctuation will be present in the inputs.
*/

// Data to test.
console.log(pigLatinSentence("this is pig latin"));
console.log(pigLatinSentence("wall street journal"));
console.log(pigLatinSentence("rais the bridge"));
console.log(pigLatinSentence("all pigs oink"));
  
// Initial created function
function pigLatinSentence(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    const words = str.split(" ");
    const pigLatinWords = words.map((word) => {
      if (vowels.includes(word[0])) {
        return word + "way";
      } else {
        const firstVowelIndex = word.split("").findIndex((char) => vowels.includes(char));
        return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
      }
    });
    return pigLatinWords.join(" ");
  }