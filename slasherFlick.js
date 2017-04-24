/*
Return the remaining elements of an array after
chopping off n elements from the head.

Array.prototype.slice() / Array.prototype.splice()
*/

function slasher(arr, howMany) {

  var sliced = arr.slice(howMany, arr.length);
  return sliced;
}

slasher([1, 2, 3, 4, 5, 6, 7, 8], 3);
