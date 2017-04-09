function palindrome(str) {

  str = str.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase();

  var newStr = str.split('').reverse().join('');


  if (str===newStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("A man, a plan, a canal. Panama x");
