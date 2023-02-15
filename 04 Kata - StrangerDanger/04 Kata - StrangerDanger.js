/*Write a vanilla JavaScript function that takes the string and returns an array of two arrays: 
• A word encountered for the first time is a stranger. 
• A word encountered thrice becomes an acquaintance. 
• A word encountered 5 times becomes a friend.
The first is an array of acquaintances in the order they became an acquaintance (see example).
The second is an array of friends in the order they became a friend. Words in the friend array should no longer be in the acquaintance array. 

All words should be returned in lowercase. 
Punctuation should be stripped except for apostrophes (e.g. doesn't, aren't, etc). */

// Data to test.
console.log(
  noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.")
);

// Initial created function
function noStrangers(str) {
  const words = str.toLowerCase().match(/\b[\w']+\b/g);
  const acquaintances = [];
  const friends = [];
  const frequency = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
    if (frequency[word] === 3 && acquaintances.indexOf(word) === -1) {
      acquaintances.push(word);
    } else if (frequency[word] === 5 && friends.indexOf(word) === -1) {
      if (acquaintances.indexOf(word) !== -1) {
        acquaintances.splice(acquaintances.indexOf(word), 1);
      }
      friends.push(word);
    }
  }

  return [acquaintances, friends];
}

// A more shorter code giving the same results.
const noStrangers = (s) => {
  (W = {}), (A = []), (F = []);
  for (w of s.toLowerCase().split(/[^\w']/)) {
    if (!w) continue;
    W[w] = (W[w] | 0) + 1;
    if (W[w] == 3) A.push(w);
    if (W[w] == 5) F.push(A.splice(A.indexOf(w), 1));
  }
  return [A, F];
};
