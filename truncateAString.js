/*
Truncate a string (first argument) if it is longer than the given maximum
string length (second argument).
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  
  var dots = "...";
  if (str.length > num && num > 3) {
    num -= 3;
    return str.slice(0,num) + dots;
  } else if (str.length > num && num <=3) {
    return str.slice(0,num) + dots;
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket", 5);
