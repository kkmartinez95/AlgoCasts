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
  let chunked = [];

  for (let i = 0; i < array.length; i++) {
    // check if the last element in chunked is full, or if the last element exists
    if (
      !chunked[chunked.length - 1] ||
      chunked[chunked.length - 1].length === size
    ) {
      chunked.push([array[i]]);
    } else {
      chunked[chunked.length - 1].push(array[i]);
    }
    // if it is full or exists, then push into chunked, a new array with the current element
    // else, push the current element into the last element in chunked
  }

  return chunked;
}

module.exports = chunk;
