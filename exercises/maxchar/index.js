// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// APRIL 16th 2020

// Literally the same solution!! yay!!

function maxChar(str) {
  let memo = {};
  let num = 0;
  let letter;

  for (let i = 0; i < str.length; i++) {
    if (!memo[str[i]]) {
      memo[str[i]] = 1;
    } else {
      memo[str[i]]++;
    }
  }

  for (let key in memo) {
    if (memo[key] > num) {
      num = memo[key];
      letter = key;
    }
  }
  return letter;
}

module.exports = maxChar;
