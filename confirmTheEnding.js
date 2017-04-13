/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

another solution: return str.substr(-target.length) === target;
*/

function confirmEnding(str, target) {

  var i, m = 0;

  str = str.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase().split('').reverse();
  target = target.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase().split('').reverse();


  for (i=0; i <= target.length; i++) {
    if (str[i] === target[i]) {
      m++;
  }
  }

  if (m===target.length) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");
