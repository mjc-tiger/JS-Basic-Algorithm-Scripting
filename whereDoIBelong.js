// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is
// greater than 1 (index 0), but less than 2 (index 1).

// my solution:
function getIndexToIns(arr, num) {

  var count = 0;
  for (i=0;i<arr.length;i++) {
    if (arr[i] < num) {
      count ++;
    }
  }
  return count;
}

getIndexToIns([40, 60], 50);

//another way to solve this problem:

// function getIndexToIns(arr, num) {
  // arr.sort(function(a, b) {
    // return a - b;
  // });

  // for (var a = 0; a < arr.length; a++) {
    // if (arr[a] >= num)
      // return a;
  // }
//
  // return arr.length;
// }
