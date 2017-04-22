/*
Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them
as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {

  var arrayTemp = [];
  var arrayMain = [];


  for (i=0;i<arr.length;i++) {
    if (i % size !== size - 1) {
      arrayTemp.push(arr[i]);
    } else {
      arrayTemp.push(arr[i]); //push arr's element into arrayTemp
      arrayMain.push(arrayTemp); //push array into another array
      arrayTemp = [];
    }

  }
  if (arrayTemp.length !==0) {
    arrayMain.push(arrayTemp);

  }
  return arrayMain;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
