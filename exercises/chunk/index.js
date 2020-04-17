// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// APRIL 16th 2020
// KAITLYN! REDO THIS ONE

function chunk(array, size) {
  let finalArr = [];

  for (let i = 0; i < array.length; i++) {
    if (
      !finalArr[finalArr.length - 1] ||
      finalArr[finalArr.length - 1].length === size
    ) {
      finalArr.push([array[i]]);
    } else {
      finalArr[finalArr.length - 1].push(array[i]);
    }
  }

  return finalArr;
}

module.exports = chunk;
