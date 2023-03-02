/*
Write in vanilla Javascript a function that return how many Friday 13ths there are in a given year.
*/

// Data to test.
console.log(howUnlucky(2020));
console.log(howUnlucky(2026));
console.log(howUnlucky(2016));

// Initial created function
function howUnlucky(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13); // set it to use the 13th
    if (d.getDay() === 5) { // check if 13th  falls on friday (5)
      count++;
    }
  }
  return count;
}
