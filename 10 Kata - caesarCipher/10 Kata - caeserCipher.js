/*
Write in vanilla Javascript a function that takes a string and an integer. The string is a text to be encrypted and the integer is the rotation factor. The function should return an encrypted string. It should encrypt the text by shifting the letter according to the rotation factor. So if the input text is 'ABC' and the rotation factor is 2, it then should shift letter 'A' to letter 'C', letter 'B' should shift to letter 'D', and letter 'C' should shift to letter 'E'.
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
All test input will be a valid ASCII string, so check input validation according to the logic of the function.
*/

// Data to test.
console.log(caesarCipher("middle-Outz", 2));
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));
console.log(caesarCipher("A friend in need is a friend indeed", 20));

// Initial created function
function caesarCipher(text, rotationFactor) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // Uppercase letters have ASCII codes between 65 (A) and 90 (Z).
      result += String.fromCharCode(((charCode - 65 + rotationFactor) % 26) + 65); //  The formula ((charCode - 65 + rotationFactor) % 26) + 65 shifts the character by rotationFactor positions in the alphabet while ensuring that the resulting code is within the range of uppercase letters (A-Z). For example, if the rotation factor is 2 and the current character is 'B', its ASCII code is 66. The formula would evaluate to ((66 - 65 + 2) % 26) + 65, which is 68, the code for 'D'.
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters have ASCII codes between 97 (a) and 122 (z).
      result += String.fromCharCode(((charCode - 97 + rotationFactor) % 26) + 97);
    } else { // non-letter characters
      result += text.charAt(i);
    }
  }
  return result;
}
