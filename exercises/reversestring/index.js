// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// APRIL 13th 2020

/** SOLUTION #1 */
// function reverse(str) {
//     let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

/** SOLUTION #2 */
// function reverse(str) {
//   let strArr = str.split("");
//   return strArr.reverse().join("");
// }

/** SOLUTION #3 */
function reverse(str) {
  let result = [];
  let strArr = str.split("");

  while (strArr.length !== 0) {
    result.push(strArr.pop());
  }

  return result.join("");
}

module.exports = reverse;
