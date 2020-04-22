// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// April 16th 2020
// function capitalize(str) {
//   let words = str.split(" ");
//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     result.push(words[i][0].toUpperCase() + words[i].slice(1));
//   }

//   return result.join(" ");
// }

// SOLITION #2
function capitalize(str) {
  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

module.exports = capitalize;
