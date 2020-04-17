// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// APRIL 16th 2020

function anagrams(stringA, stringB) {
  // solution code had a helper method to remove spaces/punctuation and to make the hash map...but this works well too.
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  let memoA = {};
  let memoB = {};

  if (stringA.length !== stringB.length) {
    return false;
  }

  for (let i = 0; i < stringA.length; i++) {
    if (!memoA[stringA[i]]) {
      memoA[stringA[i]] = 1;
    } else {
      memoA[stringA[i]]++;
    }
  }

  for (let i = 0; i < stringB.length; i++) {
    if (!memoB[stringB[i]]) {
      memoB[stringB[i]] = 1;
    } else {
      memoB[stringB[i]]++;
    }
  }

  for (let key in memoA) {
    if (memoA[key] !== memoB[key]) return false;
  }
  return true;
}

module.exports = anagrams;
