// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// APRIL 17th, 2020
/** I CAME UP WITH THIS ONE ;) */
// function steps(n) {
//   let string = "";

//   for (let i = 0; i < n; i++) {
//     string += "#";
//     let inner = string;

//     while (inner.length - n < 0) {
//       inner += " ";
//     }
//     console.log(inner);
//   }
// }

// SOLUTION #2
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stairs = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }
    console.log(stairs);
  }
}

// RECURSIVE SOLUTION
// function steps(n) {
//   let string = "";
//   if (string.length === n) {
//     console.log(string);
//   } else {
//     string += "#";
//     return steps(n - 1);
//   }
// }

module.exports = steps;
