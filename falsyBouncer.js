// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Based on code on MDN website using Array.prototype.filter() method:
// (example: "Filtering out all small values")

function bouncer(arr) {

  function thatistrue (value) {
    return Boolean (value);
  }
  return arr.filter(thatistrue);
}

bouncer([7, "ate", "", false, 9]);
