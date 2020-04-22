// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// APRIL 17th, 2020
function vowels(str) {
  str = str.toLowerCase();
  const vowelLetters = "aeiou";
  let count = 0;

  for (let char of str) {
    if (vowelLetters.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
